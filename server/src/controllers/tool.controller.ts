import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// List all tools with pagination, filtering, search, and sorting
export const getTools = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const { category, author, search, sort } = req.query;

    const where: Prisma.ToolWhereInput = {
      approvalStatus: 'APPROVED',
      visibilityStatus: 'PUBLIC',
    };

    if (category && category !== 'all') {
      where.category = category as string;
    }

    if (author) {
      where.authorId = author as string;
    }

    if (search) {
      where.OR = [
        { name: { contains: search as string } },
        { description: { contains: search as string } },
        { tags: { some: { name: { contains: search as string } } } }
      ];
    }

    let orderBy: Prisma.ToolOrderByWithRelationInput = { createdAt: 'desc' }; // default 'new'
    
    if (sort === 'featured') {
      orderBy = { isFeatured: 'desc' };
    } else if (sort === 'popular') {
      orderBy = { stars: 'desc' };
    }

    const [tools, total] = await Promise.all([
      prisma.tool.findMany({
        where,
        skip,
        take: limit,
        orderBy: sort === 'featured' ? [ { isFeatured: 'desc' }, { stars: 'desc' } ] : orderBy,
        include: {
          tags: true,
          author: {
            select: { id: true, username: true, avatar: true }
          }
        }
      }),
      prisma.tool.count({ where })
    ]);

    res.json({
      data: tools,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching tools:', error);
    res.status(500).json({ error: 'Failed to fetch tools' });
  }
};

// Single tool detail
export const getToolBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const tool = await prisma.tool.findUnique({
      where: { slug },
      include: {
        tags: true,
        author: {
          select: { id: true, username: true, avatar: true }
        },
        reviews: {
          include: {
            user: { select: { id: true, username: true, avatar: true } }
          },
          orderBy: { createdAt: 'desc' },
          take: 5
        }
      }
    });

    if (!tool) {
      return res.status(404).json({ error: 'Tool not found' });
    }

    res.json(tool);
  } catch (error) {
    console.error('Error fetching tool by slug:', error);
    res.status(500).json({ error: 'Failed to fetch tool' });
  }
};

// Related tools (same category)
export const getRelatedTools = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    
    const tool = await prisma.tool.findUnique({
      where: { slug },
      select: { category: true, id: true }
    });

    if (!tool) {
      return res.status(404).json({ error: 'Tool not found' });
    }

    const related = await prisma.tool.findMany({
      where: {
        category: tool.category,
        id: { not: tool.id },
        approvalStatus: 'APPROVED',
        visibilityStatus: 'PUBLIC',
      },
      take: 4,
      orderBy: { stars: 'desc' },
      include: {
        tags: true,
        author: { select: { id: true, username: true } }
      }
    });

    res.json(related);
  } catch (error) {
    console.error('Error fetching related tools:', error);
    res.status(500).json({ error: 'Failed to fetch related tools' });
  }
};

// Apps by author
export const getAppsByAuthor = async (req: Request, res: Response) => {
  try {
    const { authorId } = req.params;
    const limit = parseInt(req.query.limit as string) || 10;

    const tools = await prisma.tool.findMany({
      where: {
        authorId,
        approvalStatus: 'APPROVED',
        visibilityStatus: 'PUBLIC',
      },
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        tags: true
      }
    });

    res.json(tools);
  } catch (error) {
    console.error('Error fetching author tools:', error);
    res.status(500).json({ error: 'Failed to fetch tools by author' });
  }
};

// Featured tools
export const getFeaturedTools = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 8;
    const tools = await prisma.tool.findMany({
      where: {
        isFeatured: true,
        approvalStatus: 'APPROVED',
        visibilityStatus: 'PUBLIC',
      },
      take: limit,
      orderBy: { stars: 'desc' },
      include: { tags: true }
    });
    res.json(tools);
  } catch (error) {
    console.error('Error fetching featured tools:', error);
    res.status(500).json({ error: 'Failed to fetch featured tools' });
  }
};

// New tools
export const getNewTools = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 8;
    const tools = await prisma.tool.findMany({
      where: {
        approvalStatus: 'APPROVED',
        visibilityStatus: 'PUBLIC',
      },
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: { tags: true }
    });
    res.json(tools);
  } catch (error) {
    console.error('Error fetching new tools:', error);
    res.status(500).json({ error: 'Failed to fetch new tools' });
  }
};

// Paid tools
export const getPaidTools = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 8;
    const tools = await prisma.tool.findMany({
      where: {
        price: { notIn: ['Free', 'free', '0'] },
        approvalStatus: 'APPROVED',
        visibilityStatus: 'PUBLIC',
      },
      take: limit,
      orderBy: { stars: 'desc' },
      include: { tags: true }
    });
    res.json(tools);
  } catch (error) {
    console.error('Error fetching paid tools:', error);
    res.status(500).json({ error: 'Failed to fetch paid tools' });
  }
};
