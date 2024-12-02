// // app/api/requests/route.ts 
// import { NextRequest, NextResponse } from 'next/server';
// import { connectMongoDB } from '../connection/connection';
// import UserModel from '../models/User'; // Import the User model
// import ParentModel from '../models/Parent'; // Import the Parent model
// import StudentModel from '../models/Student'; // Import the Student model
// import RequestModel from '../models/Request'; // Import the Request model

// export async function GET(req: NextRequest) {
//   try {
//     await connectMongoDB(); // Ensure the database is connected

//     // Retrieve userId and role from the session (adjust depending on your session setup)
//     const { searchParams } = new URL(req.url);
//     const userId = searchParams.get('userId');

//     // Validate userId presence
//     if (!userId) {
//       return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
//     }

//     // Fetch the user to check their role
//     const user = await UserModel.findById(userId);
//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }

//     let recipientId;
    
//     // Check role and retrieve corresponding ID
//     if (user.role === 'parent') {
//       const parent = await ParentModel.findOne({ user: user._id });
//       if (!parent) {
//         return NextResponse.json({ error: 'Parent not found' }, { status: 404 });
//       }
//       recipientId = parent._id; // Use parent ID
//     } else if (user.role === 'student') {
//       const student = await StudentModel.findOne({ user: user._id });
//       if (!student) {
//         return NextResponse.json({ error: 'Student not found' }, { status: 404 });
//       }
//       recipientId = student._id; // Use student ID
//     } else {
//       return NextResponse.json({ error: 'Invalid user role' }, { status: 400 });
//     }

//     // Fetch requests based on the determined recipient ID
//     const requests = await RequestModel.find({ recipient: recipientId });

//     // Return the requests data
//     return NextResponse.json({ requests });
//   } catch (error) {
//     console.error("Error fetching requests:", error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


// app/api/requests/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '../connection/connection';
import UserModel from '../models/User'; // Adjust the path as necessary
import ParentModel from '../models/Parent'; // Adjust the path as necessary
import StudentModel from '../models/Student'; // Adjust the path as necessary
import RequestModel from '../models/Request'; // Adjust the path as necessary
import TeacherModel from '../models/Teacher'; // Adjust the path as necessary

export async function GET(req: NextRequest) {
  try {
    await connectMongoDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Find the user and determine role
    const user = await UserModel.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    let recipientId;
    if (user.role === 'parent') {
      const parent = await ParentModel.findOne({ user: user._id });
      if (!parent) {
        return NextResponse.json({ error: 'Parent not found' }, { status: 404 });
      }
      recipientId = parent._id;
    } else if (user.role === 'student') {
      const student = await StudentModel.findOne({ user: user._id });
      if (!student) {
        return NextResponse.json({ error: 'Student not found' }, { status: 404 });
      }
      recipientId = student._id;
    } else {
      return NextResponse.json({ error: 'Invalid user role' }, { status: 400 });
    }

    // Fetch requests based on recipientId
    const requests = await RequestModel.find({ recipient: recipientId });

    // Map through each request and fetch the teacher by user ID
    const requestsWithTeachers = await Promise.all(
      requests.map(async (request) => {
        // Fetch the Teacher document based on the user ID in `request.teacher`
        const teacher = await TeacherModel.findOne({ user: request.teacher }).populate({
          path: 'user',
          model: 'User'
        });;
        return {
          ...request.toObject(), // Convert the Mongoose document to a plain object
          teacher, // Include the populated teacher document
        };
      })
    );

    return NextResponse.json({ requests: requestsWithTeachers });
  } catch (error) {
    console.error("Error fetching requests:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
