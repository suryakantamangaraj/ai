import { Router } from 'express';
import { 
  getPrompts, 
  getPromptBySlug, 
  getRelatedPrompts,
  toggleLikePrompt,
  toggleSavePrompt,
  recordRun,
  reportPrompt,
  recordShare,
  saveToCollection,
  removeFromCollection
} from '../controllers/prompt.controller';
import { requireAuth, optionalAuth } from '../middlewares/auth';

const router = Router();

// Public / Optional Auth routes
router.get('/', optionalAuth, getPrompts);
router.get('/:slug', optionalAuth, getPromptBySlug);
router.get('/:id/related', getRelatedPrompts);
router.post('/:id/share', recordShare);

// Protected routes
router.post('/:id/like', requireAuth, toggleLikePrompt);
router.post('/:id/save', requireAuth, toggleSavePrompt);
router.post('/:id/run', optionalAuth, recordRun); // optionalAuth allows anonymous runs
router.post('/:id/report', requireAuth, reportPrompt);

// Collection routes
router.post('/:id/collection', requireAuth, saveToCollection);
router.delete('/:id/collection', requireAuth, removeFromCollection);

export default router;
