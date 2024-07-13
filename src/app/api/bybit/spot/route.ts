import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import crypto from 'crypto';

const url = 'https://api.bybit.com';
const apiKey = process.env.BYBIT_API_KEY;
const secret = process.env.BYBIT_API_SECRET;
const recvWindow = 5000;

function generateSignature(parameters: string, secret: string, apiKey: string, timestamp: string): string {
  return crypto.createHmac('sha256', secret).update(timestamp + apiKey + recvWindow + parameters).digest('hex');
}

export async function GET(req: NextRequest) {
  const timestamp = Date.now().toString();

  if (!apiKey || !secret) {
    console.error('API key or secret is missing');
    return NextResponse.json({ message: 'API key or secret is missing' }, { status: 500 });
  }

  const endpoint = '/v5/account/wallet-balance';
  const data = 'accountType=SPOT';
  const sign = generateSignature(data, secret, apiKey, timestamp);

  try {
    const response = await axios.get(url + endpoint, {
      headers: {
        'X-BAPI-SIGN-TYPE': '2',
        'X-BAPI-SIGN': sign,
        'X-BAPI-API-KEY': apiKey,
        'X-BAPI-TIMESTAMP': timestamp,
        'X-BAPI-RECV-WINDOW': recvWindow.toString(),
      },
      params: {
        accountType: 'SPOT',
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error fetching balance:', error.message);
      if (error.response) {
        return NextResponse.json({ message: error.response.data }, { status: error.response.status });
      } else {
        return NextResponse.json({ message: error.message }, { status: 500 });
      }
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json({ message: 'Unknown error occurred' }, { status: 500 });
    }
  }
}
