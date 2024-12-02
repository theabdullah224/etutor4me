import { NextResponse } from 'next/server';
import { connectMongoDB } from '../connection/connection'; 
import Admin from '../models/Admin';

export async function POST() {
  try {
    await connectMongoDB(); 
    const admin = new Admin({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '12345abc',
    });

    const savedAdmin = await admin.save();

    return NextResponse.json({ success: true, data: savedAdmin }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
