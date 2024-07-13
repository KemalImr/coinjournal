import React from 'react';

interface PositionProps {
  position: {
    symbol: string;
    size: string;
    avgPrice: string;
    markPrice: string;
    leverage: string;
    unrealisedPnl: string;
    positionValue: string;
  };
}

const Position: React.FC<PositionProps> = ({ position }) => {
  if (!position) {
    return null; // Return nothing if position is not defined
  }

  return (
    <div className="bg-card shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2 text-card-foreground">{position.symbol}</h2>
      <p className="text-muted-foreground">Size: {position.size}</p>
      <p className="text-muted-foreground">Average Entry Price: {position.avgPrice}</p>
      <p className="text-muted-foreground">Mark Price: {position.markPrice}</p>
      <p className="text-muted-foreground">Leverage: {position.leverage}</p>
      <p className="text-muted-foreground">Unrealized PnL: {position.unrealisedPnl}</p>
      <p className="text-muted-foreground">Position Value: {position.positionValue}</p>
    </div>
  );
};

export default Position;
