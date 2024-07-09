"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComponent from './ChartComponent';

interface PriceData {
  date: string;
  price: number;
}

const BitcoinPrice: React.FC = () => {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMonthlyPrices = async () => {
      try {
        const startDate = new Date('2023-07-01').getTime() / 1000; // UNIX-Zeitstempel in Sekunden
        const endDate = new Date('2024-07-01').getTime() / 1000;   // UNIX-Zeitstempel in Sekunden

        const response = await axios.get('/api/kucoin', {
          params: {
            symbol: 'BTC-USDT',
            startAt: startDate,
            endAt: endDate
          }
        });

        const formattedPrices: PriceData[] = response.data.data.map((entry: any) => ({
          date: new Date(entry[0] * 1000).toISOString().split('T')[0], // UNIX-Zeitstempel zu Datum
          price: parseFloat(entry[2]) // Schlusskurs
        }));

        setPrices(formattedPrices.reverse());
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchMonthlyPrices();
  }, []);

  if (error) {
    return <div>Fehler beim Abrufen der historischen Bitcoin-Preise</div>;
  }

  return (
    <div>
      <ChartComponent prices={prices} />
    </div>
  );
};

export default BitcoinPrice;
