// app/api/get-incoming-requests/route.ts
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import BookingModel from '../models/Booking'; // Adjust path as necessary
import { connectMongoDB } from '../connection/connection';
import {authOptions} from '@/app/api/auth/[...nextauth]/route'; // Adjust path to your NextAuth options
import TeacherModel from '@/app/api/models/Teacher'; 
import mongoose from 'mongoose';





export async function GET(req: NextRequest) {
  
  
  
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    }
    const userId = session.user.id;
    console.log(userId)
    const teacher = await TeacherModel.findOne({ user: userId });
    if (!teacher) {
      return NextResponse.json({ error: 'teacher not found' }, { status: 404 });
    }
    
    await connectMongoDB(); // Ensure database connection

    // Fetch all booking requests where the teacher matches the session user and status is pending
    // const bookingRequests = await BookingModel.find({
    //   teacher: teacher._id, // Use the teacher's ID from session
     
    // })
    // .populate('student') // Basic user details
 
    //   .lean(); // Converts MongoDB documents to plain JavaScript objects

    const bookingRequests = await BookingModel.find({
      teacher: teacher._id, // Use the teacher's ID from session
    })
      .populate('student') // Populate the user details first
      .lean(); // Convert to plain JavaScript objects
    
    // Import Student and Parent models
    const Student = mongoose.model('Student');
    const Parent = mongoose.model('Parent');
    
    // Populate Parent or Student based on user role
    for (let booking of bookingRequests) {
      // @ts-ignore
      if (booking?.student?.role === 'parent') {
        // @ts-ignore
        booking.studentdetails = await Parent.findOne({ user: booking.student._id }).lean();
        // @ts-ignore
      } else if (booking?.student?.role === 'student') {
        // @ts-ignore
        booking.studentdetails = await Student.findOne({ user: booking.student._id }).lean();
      }
    }
    
    // Now, `bookingRequests` contains the parentDetails or studentDetails populated
    

    return NextResponse.json({ bookingRequests }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching incoming booking requests:', error.message, error.stack);
      return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
    } else {
      console.error('An unknown error occurred');
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
