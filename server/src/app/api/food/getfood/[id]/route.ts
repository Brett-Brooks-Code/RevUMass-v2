import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const foodId = parseInt(id);
  if (isNaN(foodId)) return NextResponse.json({ status: 404 });

  const food = await prisma.food.findUniqueOrThrow({
    where: { id: foodId },
    include: {
      reviewable: {
        omit: { id: true },
        include: {
          reviews: {
            omit: { reviewableId: true }
          },
        },
      },
    },
  });

  const reviewableId = food.reviewableId;
  const avgStars = await prisma.review.aggregate({
    where: { reviewableId: reviewableId },
    _avg: { stars: true },
  });

  const ret = {
    id: food.id,
    name: food.name,
    reviewableId: food.reviewableId,
    imagePath: food.imagePath,
    avgStars: avgStars?._avg.stars || -1,
    reviews: food.reviewable.reviews,
  };
  return NextResponse.json(ret, { status: 200 });
}
