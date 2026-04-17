import { Router } from 'express';
import { requireAuth } from '../middlewares/auth';
import {
  createRequest,
  getMyRequests,
  createSubmission,
  getMySubmissions
} from '../controllers/community.controller';

const router = Router();

// All community routes require authentication
router.use(requireAuth);

// Tool Requests
router.post('/requests', createRequest);
router.get('/requests/my', getMyRequests);

// Tool Submissions
router.post('/submissions', createSubmission);
router.get('/submissions/my', getMySubmissions);

export default router;
