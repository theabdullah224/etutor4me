

// import { NextRequest, NextResponse } from 'next/server';
// import { getServerSession } from 'next-auth';
// import BookingModel from '../models/Booking';
// import { connectMongoDB } from '../connection/connection';
// import {authOptions} from '@/app/auth/route'; 
// import TeacherModel from '@/app/api/models/Teacher';
// import nodemailer from 'nodemailer';
// import UserModel from '../models/User';

// async function sendVerificationEmail(email: string,) {
   

//     // Set up the nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         auth: {
//             user: process.env.MAIL_USERNAME,
//             pass: process.env.MAIL_PASSWORD,
//         },
//     });

   

 

//     // Mail options
//     const mailOptions = {
//         from: process.env.MAIL_FROM_ADDRESS,
//         to: email,
//         subject: 'Meeting Schedualed',
//         text: `Dear User your meeting has been created at this date`,
//         html: `hello`
//     };

//     // Attempt to send the email
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log(`Verification email sent to ${email}`);
//     } catch (error) {
//         console.error('Error sending verification email:', error);
//         throw new Error('Could not send verification email');
//     }
// }

// export async function POST(req: NextRequest) {
//   try {
//     // 1. Authentication check
//     const session = await getServerSession(authOptions);
//     if (!session) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     // 2. Get teacher
//     const userId = session.user.id;
//     const teacher = await TeacherModel.findOne({ user: userId });
//     if (!teacher) {
//       return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
//     }

//     // 3. Parse request body
//     const body = await req.json();
//     console.log('Received request body:', body); // Debug log

//     const { 
//       bookingId, 
//       newStatus, 
//       startLink, 
//       joinLink, 
//       zoomMeetingData // Changed from meetingData to match schema
//     } = body;

//     // 4. Validate required fields
//     if (!bookingId || !newStatus) {
//       return NextResponse.json({ 
//         error: 'Booking ID and new status are required' 
//       }, { status: 400 });
//     }

//     const validStatuses = ['pending', 'accepted', 'rejected'];
//     if (!validStatuses.includes(newStatus)) {
//       return NextResponse.json({ error: 'Invalid status value' }, { status: 400 });
//     }

//     // 5. Connect to MongoDB
//     await connectMongoDB();

//     // 6. Prepare update data
//     const updateData: any = {
//       status: newStatus,
//       updatedAt: new Date()
//     };

//     if (newStatus === 'accepted') {
//       if (!startLink || !joinLink || !zoomMeetingData) {
//         return NextResponse.json({ 
//           error: 'Meeting links and data are required for accepted status' 
//         }, { status: 400 });
//       }

//       // Store all Zoom meeting related data
//       updateData.startLink = startLink;
//       updateData.joinLink = joinLink;
//       updateData.zoomMeetingData = zoomMeetingData;

//       // Log the data we're about to store
//       console.log('Storing Zoom meeting data:', {
//         startLink,
//         joinLink,
//         zoomMeetingData
//       });
//     } else {
//       // Reset meeting-related fields if status is not 'accepted'
//       updateData.startLink = null;
//       updateData.joinLink = null;
//       updateData.zoomMeetingData = null;
//     }

//     // 7. Update the booking
//     const updatedBooking = await BookingModel.findOneAndUpdate(
//       { 
//         _id: bookingId, 
//         teacher: teacher._id 
//       },
//       { $set: updateData },
//       { 
//         new: true,
//         runValidators: true
//       }
//     ).populate({
//       path: 'student',
//       select: 'name email'
//     });

//     if (!updatedBooking) {
//       return NextResponse.json({ 
//         error: 'Booking not found or not associated with this teacher' 
//       }, { status: 404 });
//     }

//     // 8. Log successful update
//     console.log('Successfully updated booking:', {
//       bookingId,
//       newStatus,
//       hasZoomData: !!updatedBooking.zoomMeetingData
//     });

//     // 9. Return success response
//     return NextResponse.json({ 
//       success: true,
//       message: 'Booking status updated successfully', 
//       booking: updatedBooking 
//     }, { status: 200 });

//   } catch (error) {
//     // 10. Error handling
//     console.error('Error in update-booking-status:', error);
    
//     if (error instanceof Error) {
//       return NextResponse.json({ 
//         error: 'Internal server error', 
//         details: error.message,
//         stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
//       }, { status: 500 });
//     }
    
//     return NextResponse.json({ 
//       error: 'An unknown error occurred' 
//     }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import BookingModel from '../models/Booking';
import { connectMongoDB } from '../connection/connection';
import {authOptions} from '@/app/auth/auth'; 
import TeacherModel from '@/app/api/models/Teacher';
import nodemailer from 'nodemailer';
import UserModel from '../models/User';

  // async function sendEmailNotification(email: string, subject: string, htmlContent: string) {
  //     const transporter = nodemailer.createTransport({
  //         host: 'smtp.gmail.com',
  //         port: 587,
  //         auth: {
  //             user: process.env.MAIL_USERNAME,
  //             pass: process.env.MAIL_PASSWORD,
  //         },
  //     });

  //     const mailOptions = {
  //         from: process.env.MAIL_FROM_ADDRESS,
  //         to: email,
  //         subject: subject,
  //         html: htmlContent
  //     };

  //     try {
  //         await transporter.sendMail(mailOptions);
  //         console.log(`Email sent successfully to ${email}`);
  //     } catch (error) {
  //         console.error('Error sending email:', error);
  //         throw new Error('Could not send email notification');
  //     }
  // }

  // async function formatDateTime(date: Date, time: string): string {
  //     const bookingDate = new Date(date);
  //     const formattedDate = bookingDate.toLocaleDateString('en-US', {
  //         weekday: 'long',
  //         year: 'numeric',
  //         month: 'long',
  //         day: 'numeric'
  //     });
  //     return `${formattedDate} at ${time}`;
  // }

  // async function sendBookingNotifications(booking: any, teacherEmail: string, studentEmail: string) {
  //     const dateTimeStr = await formatDateTime(booking.date, booking.time);
  //     const subjectsList = booking.subjects.join(', ');
      
  //     // Teacher email content
  //     const teacherHtmlContent = `
  //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  //             <h2 style="color: #2c3e50;">New Booking Confirmed</h2>
  //             <p>Hello,</p>
  //             <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
  //                 <h3 style="color: #2c3e50; margin-top: 0;">Session Details:</h3>
  //                 <ul style="list-style: none; padding: 0;">
  //                     <li><strong>Date & Time:</strong> ${dateTimeStr}</li>
  //                     <li><strong>Duration:</strong> ${booking.duration}</li>
  //                     <li><strong>Subjects:</strong> ${subjectsList}</li>
  //                     <li><strong>Level:</strong> ${booking.level}</li>
  //                     <li><strong>Student Name:</strong> ${booking.student.email}</li>
  //                 </ul>
  //             </div>
  //             <div style="background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin: 15px 0;">
  //                 <p><strong>Your Zoom host link:</strong></p>
  //                 <p><a href="${booking.startLink}" style="color: #1976d2; text-decoration: none;">Click here to start the meeting</a></p>
  //             </div>
  //             <p>Please start the meeting 5 minutes before the scheduled time to ensure a smooth session.</p>
  //             <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
  //                 <p style="color: #666;">Best regards,</p>
  //                 <p style="color: #666;">Your Teaching Platform</p>
  //             </div>
  //         </div>
  //     `;

  //     // Student email content
  //     const studentHtmlContent = `
  //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  //             <h2 style="color: #2c3e50;">Booking Confirmation</h2>
  //             <p>Hello,</p>
  //             <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
  //                 <h3 style="color: #2c3e50; margin-top: 0;">Your Session Details:</h3>
  //                 <ul style="list-style: none; padding: 0;">
  //                     <li><strong>Date & Time:</strong> ${dateTimeStr}</li>
  //                     <li><strong>Duration:</strong> ${booking.duration}</li>
  //                     <li><strong>Subjects:</strong> ${subjectsList}</li>
  //                     <li><strong>Level:</strong> ${booking.level}</li>
  //                 </ul>
  //             </div>
  //             <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 15px 0;">
  //                 <p><strong>Your Zoom join link:</strong></p>
  //                 <p><a href="${booking.joinLink}" style="color: #1976d2; text-decoration: none;">Click here to join the meeting</a></p>
  //             </div>
  //             <p>Please join the meeting at the scheduled time. Make sure you have a stable internet connection and a quiet environment for the session.</p>
  //             ${!booking.student.hasCompletedFirstSession ? `
  //             <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; margin: 15px 0;">
  //                 <p><strong>First Session Tips:</strong></p>
  //                 <ul>
  //                     <li>Test your audio and video before the session</li>
  //                     <li>Have your study materials ready</li>
  //                     <li>Prepare any questions you'd like to ask</li>
  //                 </ul>
  //             </div>
  //             ` : ''}
  //             <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
  //                 <p style="color: #666;">Best regards,</p>
  //                 <p style="color: #666;">Your Teaching Platform</p>
  //             </div>
  //         </div>
  //     `;

  //     // Send emails to both parties
  //     await Promise.all([
  //         sendEmailNotification(
  //             teacherEmail,
  //             'New Session Booking Confirmed - Host Link',
  //             teacherHtmlContent
  //         ),
  //         sendEmailNotification(
  //             studentEmail,
  //             'Session Booking Confirmed - Join Link',
  //             studentHtmlContent
  //         )
  //     ]);
  // }
 
  import ical from 'ical-generator';
  
  function createCalendarEvent(booking: any, participantEmail: string, isTeacher: boolean) {
      const calendar = ical({name: 'Teaching Session'});
      
      // Parse date and time
      const [hours, minutes] = booking.time.split(':');
      const meetingDate = new Date(booking.date);
      meetingDate.setHours(parseInt(hours), parseInt(minutes));
      
      // Calculate end time (parse duration like "40 min" to get minutes)
      const endTime = new Date(meetingDate.getTime());
      const durationInMinutes = parseInt(booking.duration) || 40;
      endTime.setMinutes(endTime.getMinutes() + durationInMinutes);
  
      // Create calendar event
      calendar.createEvent({
          start: meetingDate,
          end: endTime,
          summary: `Teaching Session - ${booking.subjects.join(', ')}`,
          description: `
              Subjects: ${booking.subjects.join(', ')}
              Level: ${booking.level}
              Duration: ${booking.duration}
              
              ${isTeacher ? 
                  `Start Meeting Link: ${booking.startLink}` : 
                  `Join Meeting Link: ${booking.joinLink}`}
          `,
          url: isTeacher ? booking.startLink : booking.joinLink,
          organizer: {
              name: 'eTutor4me',
              email: process.env.MAIL_FROM_ADDRESS || 'noreply@teachingplatform.com'
          },
          attendees: [
              {
                  email: participantEmail,
                //@ts-ignore
                  role: isTeacher ? 'CHAIR' : 'REQ-PARTICIPANT'
              }
          ],
          alarms: [
              {
                //@ts-ignore
                  type: 'display',
                  trigger: 600 // 10 minutes before
              }
          ]
      });
  
      return calendar;
  }
  
  async function sendEmailNotification(email: string, subject: string, htmlContent: string, booking?: any, isTeacher?: boolean) {
      const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
          },
      });
  
      let mailOptions: any = {
          from: process.env.MAIL_FROM_ADDRESS,
          to: email,
          subject: subject,
          html: htmlContent
      };
  
      // Add calendar event if booking data is provided
      if (booking && isTeacher !== undefined) {
          const calendar = createCalendarEvent(booking, email, isTeacher);
          mailOptions = {
              ...mailOptions,
              attachments: [
                  {
                      filename: 'teaching-session.ics',
                      content: calendar.toString(),
                      contentType: 'text/calendar'
                  }
              ],
              icalEvent: {
                  filename: 'teaching-session.ics',
                  method: 'REQUEST',
                  content: calendar.toString()
              }
          };
      }
  
      try {
          await transporter.sendMail(mailOptions);
          console.log(`Email${booking ? ' with calendar event' : ''} sent successfully to ${email}`);
      } catch (error) {
          console.error('Error sending email:', error);
          throw new Error('Could not send email notification');
      }
  }
  
  async function formatDateTime(date: Date, time: string) {
      const bookingDate = new Date(date);
      const formattedDate = bookingDate.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
      });
      return `${formattedDate} at ${time}`;
  }
  
  async function sendBookingNotifications(booking: any, teacherEmail: string, studentEmail: string) {
      const dateTimeStr = await formatDateTime(booking.date, booking.time);
      const subjectsList = booking.subjects.join(', ');
      
      // Teacher email content
      const teacherHtmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2c3e50;">New Booking Confirmed</h2>
              <p>Hello,</p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <h3 style="color: #2c3e50; margin-top: 0;">Session Details:</h3>
                  <ul style="list-style: none; padding: 0;">
                      <li><strong>Date & Time:</strong> ${dateTimeStr}</li>
                      <li><strong>Duration:</strong> ${booking.duration}</li>
                      <li><strong>Subjects:</strong> ${subjectsList}</li>
                      <li><strong>Level:</strong> ${booking.level}</li>
                      <li><strong>Student Name:</strong> ${booking.student.email}</li>
                  </ul>
              </div>
              <div style="background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <p><strong>Your Zoom host link:</strong></p>
                  <p><a href="${booking.startLink}" style="color: #1976d2; text-decoration: none;">Click here to start the meeting</a></p>
              </div>
              <p>Please start the meeting 5 minutes before the scheduled time to ensure a smooth session.</p>
              <p>Check your email attachments for the calendar invitation to add this session to your calendar.</p>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #666;">Best regards,</p>
                  <p style="color: #666;">Your Teaching Platform</p>
              </div>
          </div>
      `;
  
      // Student email content
      const studentHtmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2c3e50;">Booking Confirmation</h2>
              <p>Hello,</p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <h3 style="color: #2c3e50; margin-top: 0;">Your Session Details:</h3>
                  <ul style="list-style: none; padding: 0;">
                      <li><strong>Date & Time:</strong> ${dateTimeStr}</li>
                      <li><strong>Duration:</strong> ${booking.duration}</li>
                      <li><strong>Subjects:</strong> ${subjectsList}</li>
                      <li><strong>Level:</strong> ${booking.level}</li>
                  </ul>
              </div>
              <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <p><strong>Your Zoom join link:</strong></p>
                  <p><a href="${booking.joinLink}" style="color: #1976d2; text-decoration: none;">Click here to join the meeting</a></p>
              </div>
              <p>Please join the meeting at the scheduled time. Make sure you have a stable internet connection and a quiet environment for the session.</p>
              <p>Check your email attachments for the calendar invitation to add this session to your calendar.</p>
              ${!booking.student.hasCompletedFirstSession ? `
              <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <p><strong>First Session Tips:</strong></p>
                  <ul>
                      <li>Test your audio and video before the session</li>
                      <li>Have your study materials ready</li>
                      <li>Prepare any questions you'd like to ask</li>
                  </ul>
              </div>
              ` : ''}
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #666;">Best regards,</p>
                  <p style="color: #666;">Your Teaching Platform</p>
              </div>
          </div>
      `;
  
      // Send emails to both parties
      await Promise.all([
          sendEmailNotification(
              teacherEmail,
              'New Session Booking Confirmed - Host Link',
              teacherHtmlContent,
              booking,
              true // isTeacher = true
          ),
          sendEmailNotification(
              studentEmail,
              'Session Booking Confirmed - Join Link',
              studentHtmlContent,
              booking,
              false // isTeacher = false
          )
      ]);
  }
  
  
export async function POST(req: NextRequest) {
    try {
        // 1. Authentication check
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // 2. Get teacher
        const userId = session.user.id;
        const teacher = await TeacherModel.findOne({ user: userId }).populate('user', 'email');
        if (!teacher) {
            return NextResponse.json({ error: 'Teacher not found' }, { status: 404 });
        }

        // 3. Parse request body
        const body = await req.json();
        console.log('Received request body:', body);

        const { 
            bookingId, 
            newStatus, 
            startLink, 
            joinLink, 
            zoomMeetingData 
        } = body;

        // 4. Validate required fields
        if (!bookingId || !newStatus) {
            return NextResponse.json({ 
                error: 'Booking ID and new status are required' 
            }, { status: 400 });
        }

        const validStatuses = ['pending', 'accepted', 'rejected'];
        if (!validStatuses.includes(newStatus)) {
            return NextResponse.json({ error: 'Invalid status value' }, { status: 400 });
        }

        // 5. Connect to MongoDB
        await connectMongoDB();

        // 6. Prepare update data
        const updateData: any = {
            status: newStatus,
            updatedAt: new Date()
        };

        if (newStatus === 'accepted') {
            if (!startLink || !joinLink || !zoomMeetingData) {
                return NextResponse.json({ 
                    error: 'Meeting links and data are required for accepted status' 
                }, { status: 400 });
            }

            updateData.startLink = startLink;
            updateData.joinLink = joinLink;
            updateData.zoomMeetingData = zoomMeetingData;
        } else {
            updateData.startLink = null;
            updateData.joinLink = null;
            updateData.zoomMeetingData = null;
        }

        // 7. Update the booking
        const updatedBooking = await BookingModel.findOneAndUpdate(
            { 
                _id: bookingId, 
                teacher: teacher._id 
            },
            { $set: updateData },
            { 
                new: true,
                runValidators: true
            }
        ).populate({
            path: 'student',
            select: 'email hasCompletedFirstSession'
        });

        if (!updatedBooking) {
            return NextResponse.json({ 
                error: 'Booking not found or not associated with this teacher' 
            }, { status: 404 });
        }

        // 8. Send email notifications if status is accepted
        if (newStatus === 'accepted') {
            try {
                await sendBookingNotifications(
                    updatedBooking,
                    teacher.user.email,
                    //@ts-ignore
                    updatedBooking.student.email
                );
            } catch (emailError) {
                console.error('Error sending notification emails:', emailError);
                // Continue with the response even if email sending fails
            }
        }

        // 9. Return success response
        return NextResponse.json({ 
            success: true,
            message: 'Booking status updated successfully', 
            booking: updatedBooking 
        }, { status: 200 });

    } catch (error) {
        // 10. Error handling
        console.error('Error in update-booking-status:', error);
        
        if (error instanceof Error) {
            return NextResponse.json({ 
                error: 'Internal server error', 
                details: error.message,
                stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
            }, { status: 500 });
        }
        
        return NextResponse.json({ 
            error: 'An unknown error occurred' 
        }, { status: 500 });
    }
}