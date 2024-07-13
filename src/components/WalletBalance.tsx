import React, { useEffect, useState } from 'react';

const WalletBalance: React.FC = () => {
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const response = await fetch('/api/bybit/wallets');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setBalances(data.balances || []);
      } catch (error) {
        setError(error);
        console.error('Error fetching balances:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalances();
  }, []);

  if (loading) {
    return <p>Loading balances...</p>;
  }

  if (error) {
    return <p>Error loading balances: {error.message}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Wallet Balances</h1>
      {balances.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {balances.map((balance, index) => (
            <div key={index} className="bg-card shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2 text-card-foreground">{balance.accountType}</h2>
              <p className="text-muted-foreground">Total Equity: {balance.totalEquity}</p>
              <p className="text-muted-foreground">Total Wallet Balance: {balance.totalWalletBalance}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>No balance data available.</p>
      )}
    </div>
  );
};

export default WalletBalance;
