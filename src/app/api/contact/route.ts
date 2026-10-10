import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { Message } from '@/models/Message';
import { sendThankYouEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide name, email, and message.' },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const newMessage = await Message.create({
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
    });

    // Send only Thank You confirmation email to the sender
    sendThankYouEmail({ name, email, subject, message }).catch((err) => {
      console.error('⚠️ [Email Trigger Error]:', err);
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully! A confirmation email is on its way to you.',
        data: { id: newMessage._id },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Contact API Error:', error);
    const msg = error instanceof Error ? error.message : 'Server error. Please try again later.';
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    );
  }
}
