import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://api.bybit.com/v5/account/wallet-balance?accountType=CONTRACT&coin=USDC', {
    method: 'GET',
    headers: {
      'X-BAPI-SIGN': 'your_api_signature',
      'X-BAPI-API-KEY': 'your_api_key',
      'X-BAPI-TIMESTAMP': Date.now().toString(),
      'X-BAPI-RECV-WINDOW': '5000',
    },
  });

  const data = await response.json();
  res.status(200).json(data);
}
