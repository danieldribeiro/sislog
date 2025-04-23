import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const drivers = await prisma.driver.findMany();
  return NextResponse.json(drivers);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newDriver = await prisma.driver.create({ data });
  return NextResponse.json(newDriver);
}
