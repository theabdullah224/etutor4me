

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { connectMongoDB } from '@/app/api/connection/connection';
import UserModel from '@/app/api/models/User';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail } from '@/app/api/utils/sendEmail';
import GoogleProvider from 'next-auth/providers/google';



const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'text', placeholder: 'your-email@example.com' },
          password: { label: 'Password', type: 'password' },
          role: { label: 'Role', type: 'select', options: ['parent', 'teacher', 'student'] }
        },
        //@ts-ignore
        async authorize(credentials: Credentials | any, req) {
          await connectMongoDB();
  
          if (!credentials) {
            throw new Error('No credentials provided');
          }
  
          const user = await UserModel.findOne({ email: credentials.email });
  
          if (!user || typeof user.role !== 'string') {
            throw new Error('User not found or role is not a string');
          }
  
          if (user.role !== credentials.role) {
            throw new Error(`You are trying to log in as a ${credentials.role}, but your account is for a ${user.role}.`);
          }
  
          if (!user.verified) {
            const secret = process.env.JWT_SECRET;
            if (!secret) {
              console.error('JWT secret is not defined');
              throw new Error('Internal server error');
            }
            
            const token = jwt.sign(
              { userId: user._id, email: user.email },
              secret,
              { expiresIn: '1h' }
            );
  
            await sendVerificationEmail(user.email, token).catch(error => {
              console.error('Error sending verification email:', error);
              throw new Error('Error sending verification email. Please try again later.');
            });
  
            throw new Error('Email not verified. A verification email has been sent to your email address. Please verify your email before logging in.');
          }
  
          const isValid = await compare(credentials.password, user.password);
          if (!isValid) {
            throw new Error('Invalid password');
          }
  
          // Generate an access token here if needed (e.g., for APIs)
          const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
          
          return {
            email: user.email,
            role: user.role,
            id: user._id.toString(),
            accessToken, // Add the access token to the returned user object
          };
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }:any) {
        if (user) {
          token.role = user.role;
          token.id = user.id; 
          token.accessToken = user.accessToken; // Store access token in JWT token
        }
        return token; 
      },
      async session({ session, token }:any) {
        if (session.user) {
          session.user.role = token.role;
          session.user.id = token.id; 
          session.accessToken = token.accessToken; // Add access token to session
        } else {
          session.user = { role: token.role, id: token.id }; 
          session.accessToken = token.accessToken; // Add access token to session
        }
        return session;
      },
    },
    session: {
      strategy: 'jwt',
      maxAge: 60 * 60 * 24 * 30,
    },
    secret: process.env.NEXTAUTH_SECRET, 
  };

  export  {authOptions};