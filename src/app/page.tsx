import React from 'react';
import dynamic from 'next/dynamic';

const BitcoinPrice = dynamic(() => import('./components/BitcoinPrice'), { ssr: false });

export default function Home() {
  return (
    <>

      <BitcoinPrice />
    </>
  );
}