import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import crypto from 'crypto';

const url = 'https://api.bybit.com';
const apiKey = process.env.BYBIT_API_KEY;
const secret = process.env.BYBIT_API_SECRET;
const recvWindow = 5000;

interface ContractPosition {
  symbol: string;
  side: string;
  size: string;
  avgEntryPrice: string;
  leverage: string;
  unrealisedPnl: string;
}

interface ContractPositionResponse {
  result: {
    list: ContractPosition[];
  };
}

function generateSignature(parameters: string, secret: string, apiKey: string, timestamp: string): string {
  return crypto.createHmac('sha256', secret)
               .update(timestamp + apiKey + recvWindow + parameters)
               .digest('hex');
}

export async function GET(req: NextRequest) {
  const timestamp = Date.now().toString();

  if (!apiKey || !secret) {
    console.error('API key or secret is missing');
    return NextResponse.json({ message: 'API key or secret is missing' }, { status: 500 });
  }

  const endpoint = '/v5/position/list';
  const category = 'inverse'; // Example for contract positions

  const data = `category=${category}`;
  const sign = generateSignature(data, secret, apiKey, timestamp);

  try {
    const response = await axios.get<ContractPositionResponse>(url + endpoint, {
      headers: {
        'X-BAPI-SIGN-TYPE': '2',
        'X-BAPI-SIGN': sign,
        'X-BAPI-API-KEY': apiKey,
        'X-BAPI-TIMESTAMP': timestamp,
        'X-BAPI-RECV-WINDOW': recvWindow.toString(),
      },
      params: { category },
    });

    const contractPositions = response.data.result.list;
    return NextResponse.json({ contractPositions });
  } catch (error) {
    console.error('Error fetching contract positions:', error.response?.data || error.message);
    return NextResponse.json({ message: 'Error fetching contract positions' }, { status: 500 });
  }
}
