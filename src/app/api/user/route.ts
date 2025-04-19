// src/app/api/user/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
// import prisma from '@/lib/prisma'; // Default import for prisma
import prisma from '@/lib/prisma';
const JWT_SECRET = process.env.JWT_SECRET_KEY || 'your_jwt_secret';

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization'); // ✅ only here
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        fname: true,
        lname: true,
        username: true,
        email: true,
        description: true,
        link: true,
        language: true,
        timezone: true,
        role: true,
        profileImage: true,
        socialMedia: {
          select: {
            website: true,
            twitter: true,
            facebook: true,
            instagram: true,
            tiktok: true,
            youtube: true,
            whatsApp: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
console.log(user,12)
    return NextResponse.json({ user });
  } catch (error) {
    console.error('JWT error:', error);
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}

