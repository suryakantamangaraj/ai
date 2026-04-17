import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import passport from './config/passport';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import toolRoutes from './routes/tool.routes';
import reviewRoutes from './routes/review.routes';
import communityRoutes from './routes/community.routes';
import adminRoutes from './routes/admin.routes';
import promptRoutes from './routes/prompt.routes';
import { generalRateLimiter } from './middlewares/rateLimiter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Middlewares
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Apply general rate limits to all non-auth API routes
app.use('/api', generalRateLimiter);

// Routes
app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tools', toolRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/prompts', promptRoutes);
app.use('/api', reviewRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
