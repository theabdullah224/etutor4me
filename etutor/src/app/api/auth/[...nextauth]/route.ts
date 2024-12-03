

// import NextAuth, { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { compare } from 'bcryptjs';
// import { connectMongoDB } from '../../connection/connection';
// import UserModel from '../../models/User';
// import jwt from 'jsonwebtoken';
// import { sendVerificationEmail } from '../../utils/sendEmail';
// import GoogleProvider from 'next-auth/providers/google';

// interface Credentials {
//   role: string;
//   email: string;
//   password: string;
// }

// const getRoleFromPath = (path: string): string | null => {
//   if (path.includes('parentsignin')) return 'parent';
//   if (path.includes('studentsignin')) return 'student';
//   if (path.includes('tutorsignin')) return 'teacher';
//   return null;
// };

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           prompt: "select_account"
//         }
//       }
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text', placeholder: 'your-email@example.com' },
//         password: { label: 'Password', type: 'password' },
//         role: { label: 'Role', type: 'select', options: ['parent', 'teacher', 'student'] }
//       },
//       async authorize(credentials: Credentials | undefined, req) {
//         await connectMongoDB();

//         if (!credentials) {
//           throw new Error('No credentials provided');
//         }

//         const user = await UserModel.findOne({ email: credentials.email });

//         if (!user || typeof user.role !== 'string') {
//           throw new Error('User not found or role is not a string');
//         }

//         if (user.role !== credentials.role) {
//           throw new Error(`You are trying to log in as a ${credentials.role}, but your account is for a ${user.role}.`);
//         }

//         if (!user.verified) {
//           const secret = process.env.JWT_SECRET;
//           if (!secret) {
//             console.error('JWT secret is not defined');
//             throw new Error('Internal server error');
//           }
          
//           const token = jwt.sign(
//             { userId: user._id, email: user.email },
//             secret,
//             { expiresIn: '1h' }
//           );

//           await sendVerificationEmail(user.email, token).catch(error => {
//             console.error('Error sending verification email:', error);
//             throw new Error('Error sending verification email. Please try again later.');
//           });

//           throw new Error('Email not verified. A verification email has been sent to your email address. Please verify your email before logging in.');
//         }

//         const isValid = await compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error('Invalid password');
//         }

//         // Generate an access token here if needed (e.g., for APIs)
//         const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        
//         return {
//           email: user.email,
//           role: user.role,
//           id: user._id.toString(),
//           accessToken, // Add the access token to the returned user object
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       console.log(account?.provider,"----------------------------------------------------------------------------")
//       if (account?.provider == 'google') {
//         await connectMongoDB();

        

     
//         // console.log(localStorage.getItem('role'),"role------------------------000000000000000000000000000000000000000")
//         // const role = localStorage.getItem('role')
//         // if (!role) {
//         //   console.error('Invalid signin page:', callbackUrl);
//         //   return '/signin/error?error=invalid_role';
//         // }

//         try {
//           // Check if user exists
//           let dbUser = await UserModel.findOne({ email: user.email });
          
//           if (dbUser) {
//            // If the user exists, log them in (you can add logic for session or token here)
//         console.log('User already exists, logging in:', dbUser.email);

//         // Optionally, you could update the user information here if needed
//         // For example, if you want to update their name or other fields:
//         // dbUser = await UserModel.updateOne({ email: user.email }, { name: user.name });

//         // Set user role and id to pass back for the session or token
//         user.role = dbUser.role;
//         user.id = dbUser._id.toString();

//         // You can return a success or redirect here (depending on your flow)
//         return true;
//           } else {
//             console.log("inside------------------------------------------------------------------")
//             // Create new user with Google data and role
//             dbUser = await UserModel.create({
//               email: user.email,
//               name: user.name,
//               role: "teacher",
//               verified: true,
             
//             });
//           }

//           // Add role to user object
//           user.role = "teacher";
//           user.id = dbUser._id.toString();
          
//           return true;
//         } catch (error) {
//           console.error('Error during Google sign in:', error);
//           return '/signin/error?error=database_error';
//         }
//       }

//         console.log("issue............................................................................")
//         return true;
       
//     },




//     async jwt({ token, user, account }) {
//       if (user) {
//         token.role = user.role;
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.role = token.role as string;
//         session.user.id = token.id as string;
//       }
//       return session;
//     },
//     async redirect({ url, baseUrl }) {
//       // Redirect to home page after successful sign in
//       return '/';
//     },
//   },
//   pages: {
//     signIn: '/signin',
//     error: '/signin/error',
//   },
//   session: {
//     strategy: 'jwt',
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };





import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { connectMongoDB } from '../../connection/connection';
import UserModel from '../../models/User';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail } from '../../utils/sendEmail';
import GoogleProvider from 'next-auth/providers/google';
import authOptions from '@/app/auth/authOptions';
interface Credentials {
  role: string;
  email: string;
  password: string;
}

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text', placeholder: 'your-email@example.com' },
//         password: { label: 'Password', type: 'password' },
//         role: { label: 'Role', type: 'select', options: ['parent', 'teacher', 'student'] }
//       },
//       async authorize(credentials: Credentials | undefined, req) {
//         await connectMongoDB();

//         if (!credentials) {
//           throw new Error('No credentials provided');
//         }

//         const user = await UserModel.findOne({ email: credentials.email });

//         if (!user || typeof user.role !== 'string') {
//           throw new Error('User not found or role is not a string');
//         }

//         if (user.role !== credentials.role) {
//           throw new Error(`You are trying to log in as a ${credentials.role}, but your account is for a ${user.role}.`);
//         }

//         if (!user.verified) {
//           const secret = process.env.JWT_SECRET;
//           if (!secret) {
//             console.error('JWT secret is not defined');
//             throw new Error('Internal server error');
//           }
          
//           const token = jwt.sign(
//             { userId: user._id, email: user.email },
//             secret,
//             { expiresIn: '1h' }
//           );

//           await sendVerificationEmail(user.email, token).catch(error => {
//             console.error('Error sending verification email:', error);
//             throw new Error('Error sending verification email. Please try again later.');
//           });

//           throw new Error('Email not verified. A verification email has been sent to your email address. Please verify your email before logging in.');
//         }

//         const isValid = await compare(credentials.password, user.password);
//         if (!isValid) {
//           throw new Error('Invalid password');
//         }

//         // Generate an access token here if needed (e.g., for APIs)
//         const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        
//         return {
//           email: user.email,
//           role: user.role,
//           id: user._id.toString(),
//           accessToken, // Add the access token to the returned user object
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }:any) {
//       if (user) {
//         token.role = user.role;
//         token.id = user.id; 
//         token.accessToken = user.accessToken; // Store access token in JWT token
//       }
//       return token; 
//     },
//     async session({ session, token }:any) {
//       if (session.user) {
//         session.user.role = token.role;
//         session.user.id = token.id; 
//         session.accessToken = token.accessToken; // Add access token to session
//       } else {
//         session.user = { role: token.role, id: token.id }; 
//         session.accessToken = token.accessToken; // Add access token to session
//       }
//       return session;
//     },
//   },
//   session: {
//     strategy: 'jwt',
//   },
//   secret: process.env.NEXTAUTH_SECRET, 
// };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };