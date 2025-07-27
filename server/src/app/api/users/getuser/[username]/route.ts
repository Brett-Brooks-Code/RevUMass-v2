import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;

  const ret = await prisma.user.findUniqueOrThrow({
    where: { username: username },
    include: { reviews: true },
  });
  return NextResponse.json(ret, { status: 200 });
}
