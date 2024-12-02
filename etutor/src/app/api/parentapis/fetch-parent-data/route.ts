import { NextRequest, NextResponse } from 'next/server';
import {connectMongoDB} from '../../connection/connection'; // MongoDB connection function
import ParentModel from '../../models/Parent';
import StudentModel from '../../models/Student';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
export async function POST(req: NextRequest) {
  try {
    await connectMongoDB();
    const session = await getServerSession(authOptions);

    const { role } = session?.user; 
    const { userId } = await req.json();

    // Find the parent data by userId
    if (role === 'parent') {

      const parentData = await ParentModel.findOne({ user: userId }).populate('user');
      if (!parentData) {
        return NextResponse.json({ error: 'Parent data not found for this user' }, { status: 404 });
      }
      return NextResponse.json({ parentData });
    }else if(role === 'student'){
      const parentData = await StudentModel.findOne({ user: userId }).populate('user');
      return NextResponse.json({ parentData });
    }
    
    


  } catch (error) {
    console.error("Error fetching parent data:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
