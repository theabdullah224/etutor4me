import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
const roboto = Roboto_Condensed({ subsets: ["latin"] });
import { AuthProvider } from "./AuthProvider";
export const metadata: Metadata = {
  title: "eTutor4me",
  description: "eTutor4me",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <head>
      <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${roboto.className} overflow-x-hidden`}>
        {/* <Navbar /> */}
        <AuthProvider>
        {children} 
        </AuthProvider>
        {/* <Footer /> */}
        </body>
    </html>
  );
}
