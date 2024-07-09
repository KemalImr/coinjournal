import React from 'react';
import dynamic from 'next/dynamic';

const BitcoinPrice = dynamic(() => import('./components/BitcoinPrice'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Willkommen bei CoinJournal</h1>
      <BitcoinPrice />
    </div>
  );
}