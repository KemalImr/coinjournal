import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface TickerCardProps {
  symbol: string;
  lastPrice: string;
  highPrice: string;
  lowPrice: string;
}

const TickerCard: React.FC<TickerCardProps> = ({ symbol, lastPrice, highPrice, lowPrice }) => {
  return (
    <Card>
      <CardHeader>
        <h2>{symbol}</h2>
      </CardHeader>
      <CardContent>
        <p>Last Price: {lastPrice}</p>
        <p>High Price: {highPrice}</p>
        <p>Low Price: {lowPrice}</p>
      </CardContent>
      <CardFooter>
        {/* Weitere Informationen oder Aktionen */}
      </CardFooter>
    </Card>
  );
};

export default TickerCard;
