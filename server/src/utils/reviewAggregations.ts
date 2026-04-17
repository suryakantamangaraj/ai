import prisma from './prisma';

export const updateToolRating = async (toolId: string) => {
  const aggregations = await prisma.toolReview.aggregate({
    _avg: {
      rating: true,
    },
    _count: {
      id: true,
    },
    where: {
      toolId,
      status: 'APPROVED',
    },
  });

  const averageRating = aggregations._avg.rating || 0;
  const reviewCount = aggregations._count.id || 0;

  await prisma.tool.update({
    where: { id: toolId },
    data: {
      averageRating: parseFloat(averageRating.toFixed(1)),
      reviewCount,
    },
  });

  return { averageRating, reviewCount };
};
