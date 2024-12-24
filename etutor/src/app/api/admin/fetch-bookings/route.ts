// import { NextResponse } from 'next/server';
// import {connectMongoDB} from '@/app/api/connection/connection'; // Ensure this connects to your MongoDB instance
// import BookingModel from '@/app/api/models/Booking'; // Ensure this points to your Student schema
// import UserModel from '@/app/api/models/User'; // Ensure this points to your User schema

// export async function GET() {
//   try {
//     // Connect to the database
//     await connectMongoDB();

//     // Fetch all students and populate the 'user' field
//     const booking = await BookingModel.find().populate("teacher")

//     return NextResponse.json({ success: true, data: booking }, { status: 200 });
//   } catch (error:any) {
//     console.error('Error fetching students:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/app/api/connection/connection';
import BookingModel from '@/app/api/models/Booking';
import ParentModel from '@/app/api/models/Parent';
import StudentModel from '@/app/api/models/Student';

export async function GET() {
  try {
    // Connect to the database
    await connectMongoDB();

    // Fetch all bookings and populate teacher and student/parent data
    const bookings = await BookingModel.find()
      .populate('teacher') // Populate the teacher reference
      .lean(); // Use lean() to make the resulting documents plain objects

    // Iterate over the bookings to populate 'student' field conditionally
    const populatedBookings = await Promise.all(
      bookings.map(async (booking) => {
        // Try to find the student in the Student model
        let studentData = await StudentModel.findOne({ user: booking.student }).lean();

        // If not found in Student model, check the Parent model
        if (!studentData) {
          studentData = await ParentModel.findOne({ user: booking.student }).lean();
        }

        return {
          ...booking,
          student: studentData, // Add the populated student/parent data
        };
      })
    );

    return NextResponse.json({ success: true, data: populatedBookings }, { status: 200 });
  } catch (error:any) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
