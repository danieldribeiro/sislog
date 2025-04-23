import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const trips = await prisma.trip.findMany({
    include: {
      driver: true,
      vehicle: true,
    },
  });
  return NextResponse.json(trips);
}

export async function POST(req: Request) {
  const body = await req.json();
  const trip = await prisma.trip.create({ data: body });
  return NextResponse.json(trip);
}
