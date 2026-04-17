import { Router } from 'express';
import { requireAuth, requireAdmin } from '../middlewares/auth';
import {
  getPendingSubmissions,
  updateSubmissionStatus,
  getOpenRequests,
  updateRequestStatus
} from '../controllers/admin.controller';

const router = Router();

// Apply auth and admin checks to all admin routes
router.use(requireAuth);
router.use(requireAdmin);

// Admin Community Submission Routes
router.get('/community/submissions', getPendingSubmissions);
router.put('/community/submissions/:id/status', updateSubmissionStatus);

// Admin Community Request Routes
router.get('/community/requests', getOpenRequests);
router.put('/community/requests/:id/status', updateRequestStatus);

export default router;
