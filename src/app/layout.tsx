import './globals.css';
import React, { ReactNode } from 'react';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Nav } from '@/components/nav';
import { ThemeProvider } from 'next-themes'
import Link from 'next/link';

import { TradingProvider } from '../context/TradingContext';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">

    <body>
      <ThemeProvider>
        <TradingProvider>
      <div className="ps-20">
        <Link href="/">
          <h1 className='text-6xl font font-thin ps-16'>CoinJournal</h1>
        </Link>
        <Nav />
      </div>
      {children}
      </TradingProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}