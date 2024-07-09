import React from 'react';
import dynamic from 'next/dynamic';

const BitcoinPrice = dynamic(() => import('../components/BitcoinPrice'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1 className='text-6xl font font-thin'>Willkommen bei CoinJournal</h1>
      <BitcoinPrice />
    </div>
  );
}