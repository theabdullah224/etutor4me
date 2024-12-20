



import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { connectMongoDB } from '../../connection/connection';
import UserModel from '../../models/User';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail } from '../../utils/sendEmail';
import GoogleProvider from 'next-auth/providers/google';
import {authOptions} from '@/app/auth/auth';
interface Credentials {
  role: string;
  email: string;
  password: string;
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };