import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import prisma from '../utils/prisma';

export const createRequest = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description } = req.body;
    const userId = req.userId!;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    // Deduplication check
    const existingRequest = await prisma.toolRequest.findFirst({
      where: {
        title: title
      }
    });

    if (existingRequest) {
      return res.status(409).json({ error: 'A request with this title already exists' });
    }

    const request = await prisma.toolRequest.create({
      data: {
        userId,
        title,
        description,
        status: 'OPEN'
      }
    });

    return res.status(201).json({ message: 'Request created successfully', request });
  } catch (error) {
    console.error('Error in createRequest:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMyRequests = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const requests = await prisma.toolRequest.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    return res.status(200).json(requests);
  } catch (error) {
    console.error('Error in getMyRequests:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const createSubmission = async (req: AuthRequest, res: Response) => {
  try {
    const toolData = req.body;
    const userId = req.userId!;

    if (!toolData || !toolData.name) {
      return res.status(400).json({ error: 'Tool data with a name is required' });
    }

    // Deduplication check: Check if tool is already in the main tools table
    const existingTool = await prisma.tool.findFirst({
      where: {
        name: toolData.name
      }
    });

    if (existingTool) {
      return res.status(409).json({ error: 'A tool with this name already exists in the directory' });
    }

    const submission = await prisma.toolSubmission.create({
      data: {
        userId,
        toolData: JSON.stringify(toolData),
        status: 'PENDING'
      }
    });

    return res.status(201).json({ message: 'Tool submission created successfully', submission });
  } catch (error) {
    console.error('Error in createSubmission:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getMySubmissions = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const submissions = await prisma.toolSubmission.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    // Parse toolData before sending it back
    const formattedSubmissions = submissions.map(sub => ({
      ...sub,
      toolData: JSON.parse(sub.toolData)
    }));

    return res.status(200).json(formattedSubmissions);
  } catch (error) {
    console.error('Error in getMySubmissions:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
