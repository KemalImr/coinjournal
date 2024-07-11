"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface TradingContextProps {
  balance: any;
  fetchBalance: () => Promise<void>;
  error: string | null;
}

const TradingContext = createContext<TradingContextProps | undefined>(undefined);

export const useTrading = (): TradingContextProps => {
  const context = useContext(TradingContext);
  if (!context) {
    throw new Error('useTrading must be used within a TradingProvider');
  }
  return context;
};

interface TradingProviderProps {
  children: ReactNode;
}

export const TradingProvider = ({ children }: TradingProviderProps): JSX.Element => {
  const [balance, setBalance] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchBalance = async () => {
    try {
      const response = await fetch(`/api/bybit/balance`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBalance(data.result);
      setError(null); // Reset error state if successful
    } catch (err: any) {
      console.error('Error fetching balance:', err.message || err);
      setError('Error fetching balance');
    }
  };

  return (
    <TradingContext.Provider value={{ balance, fetchBalance, error }}>
      {children}
    </TradingContext.Provider>
  );
};
