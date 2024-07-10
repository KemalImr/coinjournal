import React from 'react';
import dynamic from 'next/dynamic';

const BitcoinPrice = dynamic(() => import('../components/BitcoinPrice'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-thin">Willkommen bei CoinJournal</h1>
      <BitcoinPrice />
      <h1>Welcome to the User Management App</h1>
      <p>Use the navigation to create a new user.</p>
    </div>
  );
}