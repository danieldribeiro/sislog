import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const driver = await prisma.driver.update({
    where: { id: Number(params.id) },
    data: body,
  });
  
  return NextResponse.json(driver);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.driver.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json({ message: 'Driver deleted' });
}
