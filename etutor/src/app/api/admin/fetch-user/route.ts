import { NextResponse } from 'next/server';
import {connectMongoDB} from '@/app/api/connection/connection'; 
import UserModel from '@/app/api/models/User'; 

export async function GET() {
  try {
    // Connect to the database
    await connectMongoDB();

    // Fetch all students and populate the 'user' field
    const users = await UserModel.find().select('-password')

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error:any) {
    console.error('Error fetching students:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
