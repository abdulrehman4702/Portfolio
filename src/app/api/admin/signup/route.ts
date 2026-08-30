import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/auth';

const ADMIN_REGISTRATION_SECRET =
  process.env.ADMIN_REGISTRATION_SECRET || 'superadmin_secret_2026';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, adminSecret } = await req.json();

    if (!name || !email || !password || !adminSecret) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields including Admin Passcode.' },
        { status: 400 }
      );
    }

    if (adminSecret !== ADMIN_REGISTRATION_SECRET) {
      return NextResponse.json(
        { success: false, error: 'Invalid Admin Registration Passcode.' },
        { status: 403 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters long.' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'An account with this email already exists.' },
        { status: 409 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: 'super_admin',
    });

    const token = signToken({
      userId: newUser._id.toString(),
      email: newUser.email,
      role: newUser.role,
    });

    const response = NextResponse.json(
      {
        success: true,
        message: 'Super Admin account created successfully!',
        user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role },
      },
      { status: 201 }
    );

    // Set secure HTTP-Only Cookie
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Internal Server Error';
    let friendlyError = msg;

    if (msg.includes('bad auth') || msg.includes('authentication failed')) {
      friendlyError = 'MongoDB Database Authentication Failed. Please check the database username/password in your .env file.';
    }

    return NextResponse.json(
      { success: false, error: friendlyError },
      { status: 500 }
    );
  }
}
