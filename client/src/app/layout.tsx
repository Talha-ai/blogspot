// src/app/layout.tsx
import { Poppins, Leckerli_One } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { AuthModalProvider } from '../components/AuthModalProvider';
import AuthModal from '../components/AuthModal';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});

const leckerliOne = Leckerli_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-leckerli',
});

export const metadata: Metadata = {
  title: 'BlogInn - Your Source for Insightful Content',
  description: 'Discover articles, stories and tips on a variety of topics.',
  icons: {
    icon: '/favicon-3.png',
  },
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} ${leckerliOne.variable} bg-[url('/bg3.avif')] h-[100vh] bg-cover bg-repeat`}
      >
        <AuthModalProvider>
          <Navbar />
          <main className="min-h-screen pt-[75px]">{children}</main>
          <Footer />
          <WhatsAppButton />
          <AuthModal />
        </AuthModalProvider>
      </body>
    </html>
  );
}
