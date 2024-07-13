



// import { useEffect, useState } from 'react';
// import TokenCard from '@/components/TokenCard';
// import StatsCard from '@/components/StatsCard';

// const Dashboard = () => {
//   const [balance, setBalance] = useState(null);

//   useEffect(() => {
//     const fetchBalance = async () => {
//       try {
//         const response = await fetch('/api/bybit/balance');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setBalance(data);
//       } catch (error) {
//         console.error('Error fetching balance:', error);
//       }
//     };

//     fetchBalance();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
//       {balance ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <StatsCard title="Total Equity" value={balance.result.list[0].totalEquity} />
//           <StatsCard title="Total Wallet Balance" value={balance.result.list[0].totalWalletBalance} />
//           <StatsCard title="Total Perp UPL" value={balance.result.list[0].totalPerpUPL} />
//           {balance.result.list[0].coin.map((coin: any) => (
//             <TokenCard key={coin.coin} coin={coin} />
//           ))}
//         </div>
//       ) : (
//         <p>Loading balance...</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

'use client'

import { useEffect, useState } from 'react';
import TokenCard from '@/components/TokenCard';
import StatsCard from '@/components/StatsCard';

const SpotDashboard = () => {
  const [balance, setBalance] = useState<{ result: any } | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('/api/bybit/spot');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBalance(data);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Spot Dashboard</h1>
      {balance && balance.result && balance.result.list && balance.result.list.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard title="Total Equity" value={balance.result.list[0].totalEquity} />
          <StatsCard title="Total Wallet Balance" value={balance.result.list[0].totalWalletBalance} />
          <StatsCard title="Total Perp UPL" value={balance.result.list[0].totalPerpUPL} />
          {balance.result.list[0].coin.map((coin: any) => (
            <TokenCard key={coin.coin} coin={coin} />
          ))}
        </div>
      ) : (
        <p>Loading balance...</p>
      )}
    </div>
  );
};

export default SpotDashboard;
