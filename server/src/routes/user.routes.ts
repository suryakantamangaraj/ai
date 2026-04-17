import { Router } from 'express';
import { requireAuth, AuthRequest } from '../middlewares/auth';
import prisma from '../utils/prisma';
import { generalRateLimiter } from '../middlewares/rateLimiter';

const router = Router();

// Get profile
router.get('/profile', requireAuth, generalRateLimiter, async (req: AuthRequest, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, username: true, email: true, avatar: true, createdAt: true }
  });
  res.json(user);
});

// Update profile / Onboarding
router.put('/profile', requireAuth, generalRateLimiter, async (req: AuthRequest, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  // Check uniqueness
  const existingUser = await prisma.user.findUnique({ where: { username } });
  if (existingUser && existingUser.id !== req.userId) {
    return res.status(400).json({ error: 'Username is already taken' });
  }

  const updatedUser = await prisma.user.update({
    where: { id: req.userId },
    data: { username },
    select: { id: true, username: true, email: true, avatar: true }
  });

  res.json({ success: true, user: updatedUser });
});

export default router;
