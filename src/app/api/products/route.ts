// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma'; // Assuming you have this file; otherwise use `new PrismaClient()`

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ error: 'Authorization token is required' }, { status: 401 });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY || '') as { userId: number };
    const userId = decodedToken.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const product = await prisma.product.create({
      data: {
        ...data,
        price: parseFloat(data.price),
        commission: parseFloat(data.commission),
        ownerId: user.id, // ✅ Set the ownerId field
        status: data.status || 'pending', // <- Add status with fallback
        images: data.images
          ? {
              create: data.images.map((url: string) => ({ url })),
            }
          : undefined,
      },
    });

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error('Error saving product:', error);
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
