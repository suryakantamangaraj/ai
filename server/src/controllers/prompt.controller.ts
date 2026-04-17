import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import prisma from '../utils/prisma';

export const getPrompts = async (req: AuthRequest, res: Response) => {
  try {
    const { category, type, tags, q, sort, page = '1', limit = '12' } = req.query;
    const userId = req.userId;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    // Build the query where clause
    const where: any = {
      visibilityStatus: 'PUBLIC'
    };

    if (category) {
      where.category = String(category);
    }

    if (type) {
      where.type = String(type);
    }

    if (tags) {
      const tagsArray = String(tags).split(',').map(t => t.trim());
      where.tags = {
        some: {
          slug: { in: tagsArray }
        }
      };
    }

    if (q) {
      const searchString = String(q);
      where.OR = [
        { title: { contains: searchString } },
        { description: { contains: searchString } },
        { content: { contains: searchString } }
      ];
    }

    // Build sort
    let orderBy: any = { createdAt: 'desc' }; // Default to newest
    if (sort === 'popular') {
      orderBy = { likes: 'desc' };
    } else if (sort === 'alphabetical') {
      orderBy = { title: 'asc' };
    }

    const [prompts, total] = await Promise.all([
      prisma.prompt.findMany({
        where,
        skip,
        take: limitNum,
        orderBy,
        include: {
          author: {
            select: { id: true, username: true, avatar: true }
          },
          tags: true,
          ...(userId ? {
            promptLikes: { where: { userId } },
            promptSaves: { where: { userId } }
          } : {})
        }
      }),
      prisma.prompt.count({ where })
    ]);

    const formattedPrompts = prompts.map((prompt: any) => {
      const { promptLikes, promptSaves, ...rest } = prompt;
      return {
        ...rest,
        hasLiked: promptLikes?.length > 0,
        hasSaved: promptSaves?.length > 0
      };
    });

    return res.status(200).json({
      prompts: formattedPrompts,
      meta: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('Error fetching prompts:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getPromptBySlug = async (req: AuthRequest, res: Response) => {
  try {
    const { slug } = req.params;
    const userId = req.userId;

    const prompt = await prisma.prompt.findUnique({
      where: { slug },
      include: {
        author: {
          select: { id: true, username: true, avatar: true }
        },
        tags: true,
        versions: {
          orderBy: { versionNumber: 'desc' },
          take: 5
        },
        ...(userId ? {
          promptLikes: { where: { userId } },
          promptSaves: { where: { userId } }
        } : {})
      }
    });

    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }

    // If we want to strictly only allow PUBLIC prompts to be viewed without auth
    if (prompt.visibilityStatus !== 'PUBLIC') {
      return res.status(403).json({ error: 'This prompt is not public' });
    }

    const { promptLikes, promptSaves, ...rest } = prompt as any;
    const formattedPrompt = {
      ...rest,
      hasLiked: promptLikes?.length > 0,
      hasSaved: promptSaves?.length > 0
    };

    return res.status(200).json(formattedPrompt);
  } catch (error) {
    console.error('Error fetching prompt by slug:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRelatedPrompts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { limit = '4' } = req.query;

    const limitNum = parseInt(limit as string, 10);

    const prompt = await prisma.prompt.findUnique({
      where: { id },
      include: { tags: true }
    });

    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }

    const tagIds = prompt.tags.map(t => t.id);

    // Find prompts with matching category or tags, excluding current
    const relatedPrompts = await prisma.prompt.findMany({
      where: {
        id: { not: id },
        visibilityStatus: 'PUBLIC',
        OR: [
          { category: prompt.category },
          { tags: { some: { id: { in: tagIds } } } }
        ]
      },
      take: limitNum,
      orderBy: { likes: 'desc' }, // Order related by popularity or could be random
      include: {
        author: {
          select: { id: true, username: true, avatar: true }
        },
        tags: true
      }
    });

    return res.status(200).json(relatedPrompts);
  } catch (error) {
    console.error('Error fetching related prompts:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const toggleLikePrompt = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId!;

    const prompt = await prisma.prompt.findUnique({ where: { id } });
    if (!prompt) return res.status(404).json({ error: 'Prompt not found' });

    const existingLike = await prisma.promptLike.findFirst({
      where: { promptId: id, userId }
    });

    if (existingLike) {
      await prisma.$transaction([
        prisma.promptLike.delete({ where: { id: existingLike.id } }),
        prisma.prompt.update({ where: { id }, data: { likes: { decrement: 1 } } })
      ]);
      return res.status(200).json({ hasLiked: false, likes: prompt.likes - 1 });
    } else {
      await prisma.$transaction([
        prisma.promptLike.create({ data: { promptId: id, userId } }),
        prisma.prompt.update({ where: { id }, data: { likes: { increment: 1 } } })
      ]);
      return res.status(200).json({ hasLiked: true, likes: prompt.likes + 1 });
    }
  } catch (error) {
    console.error('Error toggling like:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const toggleSavePrompt = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId!;

    const prompt = await prisma.prompt.findUnique({ where: { id } });
    if (!prompt) return res.status(404).json({ error: 'Prompt not found' });

    const existingSave = await prisma.promptSave.findFirst({
      where: { promptId: id, userId }
    });

    if (existingSave) {
      await prisma.$transaction([
        prisma.promptSave.delete({ where: { id: existingSave.id } }),
        prisma.prompt.update({ where: { id }, data: { saves: { decrement: 1 } } })
      ]);
      return res.status(200).json({ hasSaved: false, saves: prompt.saves - 1 });
    } else {
      await prisma.$transaction([
        prisma.promptSave.create({ data: { promptId: id, userId } }),
        prisma.prompt.update({ where: { id }, data: { saves: { increment: 1 } } })
      ]);
      return res.status(200).json({ hasSaved: true, saves: prompt.saves + 1 });
    }
  } catch (error) {
    console.error('Error toggling save:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const recordRun = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId; // Optional
    const { inputVariables, output } = req.body;

    const prompt = await prisma.prompt.findUnique({ where: { id } });
    if (!prompt) return res.status(404).json({ error: 'Prompt not found' });

    if (userId) {
      await prisma.$transaction([
        prisma.promptRun.create({
          data: {
            promptId: id,
            userId,
            inputVariables: inputVariables ? JSON.stringify(inputVariables) : null,
            output: output || ''
          }
        }),
        prisma.prompt.update({ where: { id }, data: { runs: { increment: 1 } } })
      ]);
    } else {
      await prisma.prompt.update({ where: { id }, data: { runs: { increment: 1 } } });
    }

    return res.status(200).json({ success: true, runs: prompt.runs + 1 });
  } catch (error) {
    console.error('Error recording run:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const reportPrompt = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId!;
    const { reason } = req.body;

    if (!reason) return res.status(400).json({ error: 'Reason is required' });

    const prompt = await prisma.prompt.findUnique({ where: { id } });
    if (!prompt) return res.status(404).json({ error: 'Prompt not found' });

    await prisma.promptReport.create({
      data: { promptId: id, userId, reason }
    });

    return res.status(201).json({ success: true, message: 'Report submitted successfully' });
  } catch (error) {
    console.error('Error reporting prompt:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const recordShare = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const prompt = await prisma.prompt.update({
      where: { id },
      data: { shares: { increment: 1 } }
    });

    return res.status(200).json({ success: true, shares: prompt.shares });
  } catch (error) {
    console.error('Error recording share:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const saveToCollection = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { collectionId } = req.body;
    const userId = req.userId!;

    if (!collectionId) return res.status(400).json({ error: 'collectionId is required' });

    const collection = await prisma.collection.findUnique({ where: { id: collectionId } });
    if (!collection || collection.userId !== userId) {
      return res.status(403).json({ error: 'Collection not found or unauthorized' });
    }

    const existingItem = await prisma.collectionItem.findFirst({
      where: { collectionId, itemId: id, itemType: 'PROMPT' }
    });

    if (existingItem) {
      return res.status(400).json({ error: 'Prompt already in collection' });
    }

    await prisma.collectionItem.create({
      data: { collectionId, itemId: id, itemType: 'PROMPT' }
    });

    return res.status(201).json({ success: true, message: 'Saved to collection' });
  } catch (error) {
    console.error('Error saving to collection:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const removeFromCollection = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params; // prompt ID
    const { collectionId } = req.body;
    const userId = req.userId!;

    if (!collectionId) return res.status(400).json({ error: 'collectionId is required' });

    const collection = await prisma.collection.findUnique({ where: { id: collectionId } });
    if (!collection || collection.userId !== userId) {
      return res.status(403).json({ error: 'Collection not found or unauthorized' });
    }

    const existingItem = await prisma.collectionItem.findFirst({
      where: { collectionId, itemId: id, itemType: 'PROMPT' }
    });

    if (!existingItem) {
      return res.status(404).json({ error: 'Prompt not found in collection' });
    }

    await prisma.collectionItem.delete({ where: { id: existingItem.id } });

    return res.status(200).json({ success: true, message: 'Removed from collection' });
  } catch (error) {
    console.error('Error removing from collection:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
