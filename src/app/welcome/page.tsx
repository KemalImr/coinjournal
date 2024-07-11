// src/app/welcome/page.tsx
"use client";

import Link from 'next/link';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Willkommen bei CoinJournal</h1>
      <div className="space-y-4">
        <Link href="/login">
          <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Anmelden
          </a>
        </Link>
        <Link href="/register">
          <a className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            Konto erstellen
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
