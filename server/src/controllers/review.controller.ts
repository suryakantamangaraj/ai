import { Request, Response } from 'express';
import prisma from '../utils/prisma';
import { AuthRequest } from '../middlewares/auth';
import { updateToolRating } from '../utils/reviewAggregations';

// List reviews for a tool
export const getToolReviews = async (req: Request, res: Response) => {
  try {
    const { toolId } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const tool = await prisma.tool.findUnique({
      where: { id: toolId }
    });

    if (!tool) {
      return res.status(404).json({ error: 'Tool not found' });
    }

    const [reviews, total] = await Promise.all([
      prisma.toolReview.findMany({
        where: { toolId, status: 'APPROVED' },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              avatar: true,
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.toolReview.count({
        where: { toolId, status: 'APPROVED' }
      })
    ]);

    res.json({
      reviews,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        averageRating: tool.averageRating,
        reviewCount: tool.reviewCount,
      }
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

// Create a review
export const createReview = async (req: AuthRequest, res: Response) => {
  try {
    const { toolId } = req.params;
    const { rating, content } = req.body;
    const userId = req.userId!;

    if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be an integer between 1 and 5' });
    }

    if (!content || typeof content !== 'string' || content.trim().length < 10) {
      return res.status(400).json({ error: 'Review content must be at least 10 characters long' });
    }

    const tool = await prisma.tool.findUnique({ where: { id: toolId } });
    if (!tool) {
      return res.status(404).json({ error: 'Tool not found' });
    }

    // Check for existing review by same user
    const existingReview = await prisma.toolReview.findFirst({
      where: { toolId, userId }
    });

    if (existingReview) {
      return res.status(409).json({ error: 'You have already reviewed this tool' });
    }

    const review = await prisma.toolReview.create({
      data: {
        toolId,
        userId,
        rating: Math.round(rating),
        content: content.trim(),
        status: 'APPROVED' // Default to approved as per plan
      },
      include: {
        user: {
          select: { id: true, username: true, avatar: true }
        }
      }
    });

    await updateToolRating(toolId);

    res.status(201).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Failed to create review' });
  }
};

// Edit a review
export const updateReview = async (req: AuthRequest, res: Response) => {
  try {
    const { reviewId } = req.params;
    const { rating, content } = req.body;
    const userId = req.userId!;

    const review = await prisma.toolReview.findUnique({ where: { id: reviewId } });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    if (review.userId !== userId) {
      return res.status(403).json({ error: 'You can only edit your own reviews' });
    }

    if (rating && (typeof rating !== 'number' || rating < 1 || rating > 5)) {
      return res.status(400).json({ error: 'Rating must be an integer between 1 and 5' });
    }

    if (content && (typeof content !== 'string' || content.trim().length < 10)) {
      return res.status(400).json({ error: 'Review content must be at least 10 characters long' });
    }

    const updatedReview = await prisma.toolReview.update({
      where: { id: reviewId },
      data: {
        ...(rating && { rating: Math.round(rating) }),
        ...(content && { content: content.trim() }),
      },
      include: {
        user: {
          select: { id: true, username: true, avatar: true }
        }
      }
    });

    await updateToolRating(updatedReview.toolId);

    res.json(updatedReview);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Failed to update review' });
  }
};

// Delete a review
export const deleteReview = async (req: AuthRequest, res: Response) => {
  try {
    const { reviewId } = req.params;
    const userId = req.userId!;

    const review = await prisma.toolReview.findUnique({ where: { id: reviewId } });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    if (review.userId !== userId) {
      return res.status(403).json({ error: 'You can only delete your own reviews' });
    }

    await prisma.toolReview.delete({ where: { id: reviewId } });
    await updateToolRating(review.toolId);

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Failed to delete review' });
  }
};

// Report a review
export const reportReview = async (req: AuthRequest, res: Response) => {
  try {
    const { reviewId } = req.params;
    const { reason } = req.body;
    const userId = req.userId!;

    if (!reason || typeof reason !== 'string' || reason.trim().length < 5) {
      return res.status(400).json({ error: 'A valid reason must be provided (min 5 characters)' });
    }

    const review = await prisma.toolReview.findUnique({ where: { id: reviewId } });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Check if the user already reported this review
    const existingFlag = await prisma.moderationFlag.findFirst({
      where: {
        entityType: 'REVIEW',
        entityId: reviewId,
        flaggedByUserId: userId
      }
    });

    if (existingFlag) {
      return res.status(409).json({ error: 'You have already reported this review' });
    }

    const flag = await prisma.moderationFlag.create({
      data: {
        entityType: 'REVIEW',
        entityId: reviewId,
        flaggedByUserId: userId,
        reason: reason.trim(),
        status: 'PENDING'
      }
    });

    res.status(201).json({ message: 'Review reported successfully', flag });
  } catch (error) {
    console.error('Error reporting review:', error);
    res.status(500).json({ error: 'Failed to report review' });
  }
};
