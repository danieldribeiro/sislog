import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const trip = await prisma.trip.update({
    where: { id: Number(params.id) },
    data: body,
  });
  return NextResponse.json(trip);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.trip.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json({ message: 'Trip deleted' });
}
