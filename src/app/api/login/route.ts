// app/api/login/route.ts (or your equivalent file)

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Assuming prisma instance is here
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // for JWT token generation (optional)
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // Compare the hashed password with the plain password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // Generate a JWT token (optional)
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET_KEY!, // You should set this in .env
      { expiresIn: "1h" }
    );

    return NextResponse.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
