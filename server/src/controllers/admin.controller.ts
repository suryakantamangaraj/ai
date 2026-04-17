import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import prisma from '../utils/prisma';

// Helper to generate a slug
const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export const getPendingSubmissions = async (req: AuthRequest, res: Response) => {
  try {
    const submissions = await prisma.toolSubmission.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { id: true, username: true, email: true } }
      }
    });

    const formattedSubmissions = submissions.map(sub => ({
      ...sub,
      toolData: JSON.parse(sub.toolData)
    }));

    return res.status(200).json(formattedSubmissions);
  } catch (error) {
    console.error('Error in getPendingSubmissions:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateSubmissionStatus = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['APPROVED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be APPROVED or REJECTED' });
    }

    const submission = await prisma.toolSubmission.findUnique({
      where: { id }
    });

    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    if (submission.status !== 'PENDING') {
      return res.status(400).json({ error: 'Submission is already processed' });
    }

    const updatedSubmission = await prisma.toolSubmission.update({
      where: { id },
      data: { status }
    });

    // If approved, create the tool
    if (status === 'APPROVED') {
      const toolData = JSON.parse(submission.toolData);
      
      // Basic slug logic: if slug already exists, append a random string
      let slug = generateSlug(toolData.name);
      let existingToolWithSlug = await prisma.tool.findUnique({ where: { slug } });
      if (existingToolWithSlug) {
        slug = `${slug}-${Math.random().toString(36).substring(2, 6)}`;
      }

      await prisma.tool.create({
        data: {
          slug,
          name: toolData.name,
          description: toolData.description || '',
          longDescription: toolData.longDescription || '',
          icon: toolData.icon || null,
          category: toolData.category || 'Other',
          platform: toolData.platform || null,
          price: toolData.price || 'Free',
          website: toolData.website || null,
          github: toolData.github || null,
          language: toolData.language || null,
          authorId: submission.userId, // The original submitter
          approvalStatus: 'APPROVED',
          visibilityStatus: 'PUBLIC'
        }
      });
    }

    // Create Notification
    await prisma.notification.create({
      data: {
        userId: submission.userId,
        type: 'SUBMISSION_STATUS',
        content: `Your tool submission was ${status.toLowerCase()}.`,
        link: '/dashboard'
      }
    });

    return res.status(200).json({ message: `Submission ${status.toLowerCase()} successfully`, submission: updatedSubmission });
  } catch (error) {
    console.error('Error in updateSubmissionStatus:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getOpenRequests = async (req: AuthRequest, res: Response) => {
  try {
    const requests = await prisma.toolRequest.findMany({
      where: { status: 'OPEN' },
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { id: true, username: true, email: true } }
      }
    });

    return res.status(200).json(requests);
  } catch (error) {
    console.error('Error in getOpenRequests:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateRequestStatus = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['FULFILLED', 'REJECTED', 'IN_PROGRESS'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status.' });
    }

    const requestToUpdate = await prisma.toolRequest.findUnique({
      where: { id }
    });

    if (!requestToUpdate) {
      return res.status(404).json({ error: 'Request not found' });
    }

    const updatedRequest = await prisma.toolRequest.update({
      where: { id },
      data: { status }
    });

    // Create Notification
    await prisma.notification.create({
      data: {
        userId: requestToUpdate.userId,
        type: 'REQUEST_STATUS',
        content: `Your tool request status was updated to ${status.toLowerCase().replace('_', ' ')}.`,
        link: '/dashboard'
      }
    });

    return res.status(200).json({ message: 'Request status updated successfully', request: updatedRequest });
  } catch (error) {
    console.error('Error in updateRequestStatus:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
