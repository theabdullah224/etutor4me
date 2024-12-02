import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongoDB } from '../../connection/connection';
import Message from '../../models/Message'; // Path to your Message model
import Conversation  from '../../models/Conversation'; // Import your Conversation model
import { NextRequest, NextResponse } from 'next/server';



// Fetch conversationId based on userId and recipientId
export async function GET(req: NextRequest) {
  try {
    // Extract userId and recipientId from the query parameters
    const userId = req.nextUrl.searchParams.get('userId');
    const recipientId = req.nextUrl.searchParams.get('recipientId');
 

    if (!userId || !recipientId) {
      return NextResponse.json({ message: 'userId and recipientId are required' }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Find the conversation between the user and recipient
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, recipientId] },
    });

    if (!conversation) {
      return NextResponse.json({messages:"ok not available"});
    }

    // Retrieve all messages for the found conversation
    const messages = await Message.find({ conversationId: conversation._id }).sort({ timestamp: 1 });

    if (!messages || messages.length === 0) {
      return NextResponse.json({ message: 'No messages found for this conversation' }, { status: 404 });
    }

    // Return the messages as the response
    return NextResponse.json({ messages });

  } catch (error: any) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ message: 'Failed to fetch messages', error: error.message }, { status: 500 });
  }
}





