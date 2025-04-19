// src/app/api/updateUser/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

const JWT_SECRET = process.env.JWT_SECRET_KEY || '';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized: No token provided' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT_SECRET) as { userId: number };
    const userId = decodedToken.userId;

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const body = await req.json();
    const { 
      fname, lname, email, description, username, website, twitter, instagram, youtube,
      password, language, timezone
    } = body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        fname: fname || user.fname,
        lname: lname || user.lname,
        email: email || user.email,
        description: description || user.description,
        username: username || user.username,
        password: password ? hashPassword(password) : user.password,
        language: language || user.language,
        timezone: timezone || user.timezone,
        socialMedia: {
          upsert: {
            create: {
              website,
              twitter,
              instagram,
              youtube,
            },
            update: {
              website,
              twitter,
              instagram,
              youtube,
            },
          },
        },
      },
      include: {
        socialMedia: true,
      },
    });

    return NextResponse.json({ message: 'User data updated successfully', user: updatedUser });

  } catch (err) {
    console.error('Token verification error:', err);
    return NextResponse.json({ message: 'Unauthorized: Invalid token' }, { status: 401 });
  }
}
