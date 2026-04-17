import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import prisma from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_for_dev_only';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'fallback_refresh_key_for_dev_only';

export const generateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '15m' });
};

export const generateRefreshToken = async (userId: string) => {
  const token = jwt.sign({ userId }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
  
  // Store refresh token in DB
  await prisma.refreshToken.create({
    data: {
      token,
      userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    },
  });
  
  return token;
};

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
  } catch (error) {
    return null;
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as { userId: string };
  } catch (error) {
    return null;
  }
};
