import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken"; // for JWT token generation (optional)

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;

    // Ensure firstName and lastName are provided
    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "First name and last name are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        fname: firstName, // Store firstName as fname
        lname: lastName,  // Store lastName as lname
        email,
        password: hashedPassword,
      },
    });

  // after creating the user
  const token = jwt.sign(
    { userId: newUser.id, email: newUser.email },
    process.env.JWT_SECRET_KEY!,
    { expiresIn: "1h" }
  );
    return NextResponse.json({ message: "Account created", user: newUser,token });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
