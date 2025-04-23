import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const vehicles = await prisma.vehicle.findMany();
  return NextResponse.json(vehicles);
}

export async function POST(req: Request) {
  const body = await req.json();
  const vehicle = await prisma.vehicle.create({ data: body });
  return NextResponse.json(vehicle);
}
