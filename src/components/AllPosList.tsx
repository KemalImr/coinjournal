import React, { useEffect, useState } from 'react';
import Position from './AllPosition';

interface PositionType {
  symbol: string;
  size: string;
  avgPrice: string;
  markPrice: string;
  leverage: string;
  unrealisedPnl: string;
  positionValue: string;
}

interface BalanceType {
  accountType: string;
  totalEquity: string;
  totalWalletBalance: string;
}

const AllPosList: React.FC = () => {
  const [positions, setPositions] = useState<PositionType[]>([]);
  const [balances, setBalances] = useState<BalanceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPositionsAndBalances = async () => {
      try {
        const response = await fetch('/api/bybit/positions');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setPositions(data.positions || []);
        setBalances(data.combinedBalance || []);
      } catch (error) {
        setError(error);
        console.error('Error fetching positions and balances:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPositionsAndBalances();
  }, []);

  if (loading) {
    return <p>Loading positions and balances...</p>;
  }

  if (error) {
    return <p>Error loading positions and balances: {error.message}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Positions</h1>
      {positions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {positions.map((position, index) => (
            <Position key={index} position={position} />
          ))}
        </div>
      ) : (
        <p>No positions available.</p>
      )}
      <h1 className="text-3xl font-bold mb-4">Wallet Balances</h1>
      {balances.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {balances.map((balance, index) => (
            <div key={index} className="bg-card shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2 text-card-foreground">{balance.accountType}</h2>
              <p className="text-muted-foreground">Total Equity: {balance.totalEquity}</p>
              <p className="text-muted-foreground">Total Wallet Balance: {balance.totalWalletBalance}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No balance data available.</p>
      )}
    </div>
  );
};

export default AllPosList;
