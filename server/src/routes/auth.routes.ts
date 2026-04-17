import { Router } from 'express';
import passport from 'passport';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt';
import prisma from '../utils/prisma';
import { requireAuth, AuthRequest } from '../middlewares/auth';
import { authRateLimiter } from '../middlewares/rateLimiter';

const router = Router();
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

const handleOAuthSuccess = async (req: any, res: any) => {
  const user = req.user;
  if (!user) return res.redirect(`${FRONTEND_URL}/?error=AuthFailed`);

  const accessToken = generateAccessToken(user.id);
  const refreshToken = await generateRefreshToken(user.id);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  });

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 15 * 60 * 1000 // 15 mins
  });

  // Redirect to frontend onboarding if username is missing, else home
  if (!user.username) {
    res.redirect(`${FRONTEND_URL}/onboarding`);
  } else {
    res.redirect(`${FRONTEND_URL}`);
  }
};

// GitHub Auth
router.get('/github', authRateLimiter, passport.authenticate('github', { session: false }));
router.get('/github/callback', authRateLimiter, passport.authenticate('github', { session: false, failureRedirect: `${FRONTEND_URL}/?error=AuthFailed` }), handleOAuthSuccess);

// Google Auth
router.get('/google', authRateLimiter, passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));
router.get('/google/callback', authRateLimiter, passport.authenticate('google', { session: false, failureRedirect: `${FRONTEND_URL}/?error=AuthFailed` }), handleOAuthSuccess);

// Apple Auth (placeholder, needs similar setup)
router.get('/apple', authRateLimiter, (req, res) => {
  res.status(501).json({ error: 'Apple OAuth setup requires Developer Account keys' });
});

// Refresh Token
router.post('/refresh', authRateLimiter, async (req, res) => {
  const token = req.cookies?.refreshToken;
  if (!token) return res.status(401).json({ error: 'No refresh token' });

  const decoded = verifyRefreshToken(token);
  if (!decoded) return res.status(401).json({ error: 'Invalid refresh token' });

  // verify existence in DB
  const storedToken = await prisma.refreshToken.findUnique({ where: { token } });
  if (!storedToken || storedToken.expiresAt < new Date()) {
    return res.status(401).json({ error: 'Token expired or revoked' });
  }

  const newAccessToken = generateAccessToken(decoded.userId);
  res.cookie('accessToken', newAccessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 15 * 60 * 1000
  });

  res.json({ success: true });
});

// Logout
router.post('/logout', requireAuth, async (req: AuthRequest, res) => {
  const token = req.cookies?.refreshToken;
  if (token) {
    await prisma.refreshToken.deleteMany({ where: { token } });
  }

  if (req.userId) {
    await prisma.auditLog.create({ data: { userId: req.userId, event: 'logout' } });
  }

  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.json({ success: true });
});

// Current User
router.get('/me', requireAuth, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, username: true, email: true, avatar: true, authProvider: true, createdAt: true }
  });
  res.json(user);
});

export default router;
