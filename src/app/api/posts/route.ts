// src/app/api/posts/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const {
      title,
      url,
      content,
      images,
      allowComments,
      featured,
      seoOptimized,
      category,
      excerpt,
      tags,
    } = await req.json();

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

    // const post = await prisma.post.create({
    //   data: {
    //     title,
    //     url,
    //     content,
    //     images,
    //     allowComments,
    //     featuredPost,
    //     seoOptimized,
    //     category,
    //     excerpt,
    //     tags,
    //     authorId: user.id,
    //   },
    // });
    const post = await prisma.post.create({
      data: {
        title,
        url,
        content,
        allowComments,
        featured,
        seoOptimized,
        category,
        excerpt,
        tags,
        authorId: user.id,
        images: {
          create: images.map((imageUrl) => ({
            url: imageUrl,
            userId: user.id, // ✅ Required field for PostImage
          })),
        },
      },
    });
    
    

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
  }
}
