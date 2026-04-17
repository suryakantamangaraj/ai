import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from '../utils/prisma';
import dotenv from 'dotenv';

dotenv.config();

// Helper to log audit events
const logAuthEvent = async (userId: string, event: string) => {
  await prisma.auditLog.create({
    data: { userId, event }
  });
};

// Process OAuth Login
const processOAuthUser = async (profile: any, provider: string) => {
  const providerId = profile.id;
  
  let email = profile.emails?.[0]?.value || '';
  if (!email && provider === 'github') {
    // Fallback if email is private, though we request it
    email = `${profile.username || providerId}@github.local`;
  }

  const avatar = profile.photos?.[0]?.value || '';

  // Find user by provider + providerId
  let user = await prisma.user.findUnique({
    where: { providerId: `${provider}_${providerId}` }
  });

  if (!user && email) {
    // Check if user exists by email but different provider (link accounts or handle error)
    user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      // Just for a simple flow, if email exists let's update their providerId 
      // or we can reject. Let's keep it simple and just link.
      user = await prisma.user.update({
        where: { email },
        data: { providerId: `${provider}_${providerId}`, authProvider: provider }
      });
    }
  }

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        avatar,
        authProvider: provider,
        providerId: `${provider}_${providerId}`,
        // username is left null; onboarding flow will prompt for it
      }
    });
    await logAuthEvent(user.id, 'signup');
  } else {
    // Optionally update avatar if it changed
    if (avatar && user.avatar !== avatar) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { avatar }
      });
    }
    await logAuthEvent(user.id, 'login');
  }

  return user;
};

// --- GitHub Strategy ---
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID || 'dummy',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || 'dummy',
    callbackURL: "/auth/github/callback",
    scope: ['user:email']
  },
  async function(accessToken: string, refreshToken: string, profile: any, done: Function) {
    try {
      if (process.env.GITHUB_CLIENT_ID === 'dummy') return done(null, false);
      const user = await processOAuthUser(profile, 'github');
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

// --- Google Strategy ---
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || 'dummy',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'dummy',
    callbackURL: "/auth/google/callback"
  },
  async function(accessToken: string, refreshToken: string, profile: any, done: Function) {
    try {
      if (process.env.GOOGLE_CLIENT_ID === 'dummy') return done(null, false);
      const user = await processOAuthUser(profile, 'google');
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
));

export default passport;
