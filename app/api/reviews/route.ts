import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      where: { replyTo: null }, // Uniquement les avis top-level
      orderBy: { createdAt: 'desc' },
      include: {
        replies: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('[API/reviews GET] Error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    const review = await prisma.review.create({
      data: { name, message },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error('Erreur complète:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la review' },
      { status: 500 }
    );
  }
}