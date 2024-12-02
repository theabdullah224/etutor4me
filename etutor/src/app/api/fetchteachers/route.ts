import { connectMongoDB } from '../connection/connection';
import TeacherModel from '../models/Teacher';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    // Connect to the MongoDB database
    await connectMongoDB();

    // Fetch all teachers where isApproved is true, and populate the user details
    const teachers = await TeacherModel.find({ isApproved: true })
      .populate({
        path: 'user',
       
      })
      .lean(); // Converts to plain JavaScript objects

    return NextResponse.json(teachers, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching teachers:', error.message, error.stack);
      return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
    } else {
      console.error('An unknown error occurred');
      return NextResponse.json({ message: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
