// // /api/recipient/messages/route.ts

// import { NextApiRequest } from 'next';
// import { NextResponse } from 'next/server';
// import {connectMongoDB} from '../../connection/connection';
// import Conversation from '../../models/Conversation';
// import User from '../../models/User';
// import Student from '../../models/Student';  // Assuming Student and Parent models are available
// import Parent from '../../models/Parent';

// export async function GET(req: NextApiRequest) {
//   try {
//     await connectMongoDB();

//     // @ts-ignore
//     const recipientId = req.nextUrl.searchParams.get('recipientId');
    
//     if (!recipientId) {
//       return NextResponse.json({ message: 'Recipient ID is required' }, { status: 400 });
//     }

//     // Find conversations that include the recipientId in participants
//     const conversations = await Conversation.find({ participants: recipientId }).populate('participants', 'name role');

//     const senders = await Promise.all(
//       conversations.map(async (conversation) => {
//         const sender = conversation.participants.find((user:any) => user._id.toString() !== recipientId);

   
//         if (sender) {
//           // Check the user's role and populate the appropriate model
//           let senderDetails;

// // Fetch the user and check the role
// const user = await User.findById(sender._id);

// if (user) {
//   if (user.role === 'student') {
//     senderDetails = await Student.findOne({ user: user._id }).populate('user');
//   } else if (user.role === 'parent') {
//     senderDetails = await Parent.findOne({ user: user._id }).populate('user');
//   }
// }

//           // Return sender with additional details based on role
//           return { ...sender.toObject(), details: senderDetails };
//         }
//       })
//     );

//     // Remove undefined values and return unique senders
//     const uniqueSenders = Array.from(new Set(senders.filter(Boolean).map((sender) => sender._id.toString()))).map(
//       (id) => senders.find((sender) => sender && sender._id.toString() === id)
//     );

//     return NextResponse.json(uniqueSenders, { status: 200 });
//   } catch (error: any) {
//     console.error('Error fetching sender data:', error);
//     return NextResponse.json({ message: 'Failed to fetch senders', error: error.message }, { status: 500 });
//   }
// }


import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '../../connection/connection';
import Conversation from '../../models/Conversation';
import User from '../../models/User';
import Student from '../../models/Student';
import Parent from '../../models/Parent';
import TeacherModel from '../../models/Teacher';

export async function GET(req: NextRequest) {
  try {
    await connectMongoDB();

    // @ts-ignore
    const recipientId = req.nextUrl.searchParams.get('recipientId');
    
    if (!recipientId) {
      return NextResponse.json({ message: 'Recipient ID is required' }, { status: 400 });
    }

    // Find conversations that include the recipientId in participants
    const conversations = await Conversation.find({ 
      participants: recipientId 
    }).populate('participants', 'name role _id');

    if (!conversations || conversations.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    const senders = await Promise.all(
      conversations.map(async (conversation:any) => {
        // Ensure conversation.participants exists and is an array
        if (!conversation.participants || !Array.isArray(conversation.participants)) {
          return null;
        }

        const sender = conversation.participants.find(
          (user: any) => user && user._id && user._id.toString() !== recipientId
        );

        if (!sender || !sender._id) {
          return null;
        }

        try {
          // Fetch the user and check the role
          const user = await User.findById(sender._id);
          
          if (!user) {
            return {
              _id: sender._id,
              name: sender.name,
              role: sender.role
            };
          }

          let senderDetails = null;
          
          if (user.role === 'student') {
            senderDetails = await Student.findOne({ user: user._id }).populate('user');
          } else if (user.role === 'parent') {
            senderDetails = await Parent.findOne({ user: user._id }).populate('user');
          }else if (user.role === 'teacher') {
            senderDetails = await TeacherModel.findOne({ user: user._id }).populate('user');
          }

          return {
            _id: sender._id,
            name: sender.name,
            role: sender.role,
            details: senderDetails
          };
        } catch (error) {
          console.error(`Error processing sender ${sender._id}:`, error);
          return null;
        }
      })
    );

    // Remove null values and ensure unique senders
    const uniqueSenders = Array.from(
      new Set(
        senders
          .filter((sender): sender is NonNullable<typeof sender> => sender !== null)
          .map(sender => sender._id.toString())
      )
    ).map(id => senders.find(sender => sender && sender._id.toString() === id));

    return NextResponse.json(uniqueSenders, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching sender data:', error);
    return NextResponse.json(
      { message: 'Failed to fetch senders', error: error.message }, 
      { status: 500 }
    );
  }
}