import { Router } from 'express';
import { requireAuth } from '../middlewares/auth';
import {
  getToolReviews,
  createReview,
  updateReview,
  deleteReview,
  reportReview
} from '../controllers/review.controller';

const router = Router();

// Tool Review Routes
router.get('/tools/:toolId/reviews', getToolReviews);
router.post('/tools/:toolId/reviews', requireAuth as any, createReview);

// General Review Routes (Edit, Delete, Report)
router.put('/reviews/:reviewId', requireAuth as any, updateReview);
router.delete('/reviews/:reviewId', requireAuth as any, deleteReview);
router.post('/reviews/:reviewId/report', requireAuth as any, reportReview);

export default router;
