import { Router } from 'express';
import {
  getTools,
  getToolBySlug,
  getRelatedTools,
  getAppsByAuthor,
  getFeaturedTools,
  getNewTools,
  getPaidTools
} from '../controllers/tool.controller';

const router = Router();

// Specialized lists first so they don't clash with :slug
router.get('/featured', getFeaturedTools);
router.get('/new', getNewTools);
router.get('/paid', getPaidTools);
router.get('/author/:authorId', getAppsByAuthor);

// Base list
router.get('/', getTools);

// Single resource endpoints
router.get('/:slug', getToolBySlug);
router.get('/:slug/related', getRelatedTools);

export default router;
