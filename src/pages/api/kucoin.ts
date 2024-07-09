import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol, startAt, endAt } = req.query;

  try {
    const response = await axios.get(`https://api.kucoin.com/api/v1/market/candles`, {
      params: {
        symbol,
        type: '1month', // Monatsintervall
        startAt,
        endAt
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Daten' });
  }
}
