import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BitcoinPriceChartProps {
  prices: { date: string; price: number }[];
}

const BitcoinPriceChart: React.FC<BitcoinPriceChartProps> = ({ prices }) => {
  const formattedData = prices.map(price => ({
    date: new Date(price.date).toLocaleDateString('de-DE', { month: 'short', year: 'numeric' }),
    price: price.price
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BitcoinPriceChart;
