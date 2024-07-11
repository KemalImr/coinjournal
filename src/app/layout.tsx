// src/app/layout.tsx
"use client";

import './globals.css';
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <div>
              <Link href="/" className="font-bold text-lg">
                CoinJournal
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/welcome" className="hover:underline">
                Willkommen
              </Link>
              <Link href="/login" className="hover:underline">
                Anmelden
              </Link>
              <Link href="/register" className="hover:underline">
                Konto erstellen
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
