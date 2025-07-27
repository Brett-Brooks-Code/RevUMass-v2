import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const food = await prisma.food.findMany();

  const avgStars = await prisma.review.groupBy({
    by: ['reviewableId'],
    where: {
      reviewableId: { in: food.map(f => f.reviewableId) },
    },
    _avg: { stars: true },
  });

  const ret = food.map(f => {
    const match = avgStars.find(s => s.reviewableId = f.reviewableId);
    return {
      id: f.id,
      name: f.name,
      reviewableId: f.reviewableId,
      imagePath: f.imagePath,
      avgStars: match?._avg.stars || -1,
    };
  });
  return NextResponse.json(ret, { status: 200 });
}
