import { NextResponse } from 'next/server';
import {connectMongoDB} from '@/app/api/connection/connection'; // Ensure this connects to your MongoDB instance
import teachermodal from '@/app/api/models/Teacher'; // Ensure this points to your Student schema

export async function GET() {
  try {
    // Connect to the database
    await connectMongoDB();

    // Fetch all students and populate the 'user' field
    const teacher = await teachermodal.find().populate('user');

    return NextResponse.json({ success: true, data: teacher }, { status: 200 });
  } catch (error:any) {
    console.error('Error fetching students:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
