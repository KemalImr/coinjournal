import React from 'react';

const TokenCard = ({ coin }: { coin: any }) => {
  return (
    <div className=" shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{coin.coin}</h2>
      <p>Available to Withdraw: {coin.availableToWithdraw}</p>
      <p>Equity: {coin.equity}</p>
      <p>USD Value: {coin.usdValue}</p>
      <p>Unrealised PnL: {coin.unrealisedPnl}</p>
    </div>
  );
};

export default TokenCard;
