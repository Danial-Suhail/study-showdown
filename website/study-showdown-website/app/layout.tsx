import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Showdown",
  description: "Generated by create next app",
};

// const LoginButton: React.FC = () => {
//   const redirectUri = '/leaderboard'; // Adjust the path as needed

//   return (
//     <Link href={`/api/auth/login?returnTo=${encodeURIComponent(redirectUri)}`}>
//       <button>Sign In</button>
//     </Link>
//   );
// }

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet"/>
      </head>
        <UserProvider>
        <body className={inter.className}>{children}</body>
        </UserProvider>
    </html>
  );
}

export default RootLayout;