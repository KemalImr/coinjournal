import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import crypto from 'crypto';

const url = 'https://api.bybit.com';
const apiKey = process.env.BYBIT_API_KEY;
const secret = process.env.BYBIT_API_SECRET;
const recvWindow = 5000;

interface Position {
  symbol: string;
  size: string;
  avgPrice: string;
  markPrice: string;
  leverage: string;
  unrealisedPnl: string;
  positionValue: string;
}

interface Balance {
  accountType: string;
  totalEquity: string;
  totalWalletBalance: string;
}

interface PositionResponse {
  result: {
    list: Position[];
  };
}

interface BalanceResponse {
  result: Balance[];
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

  const categories = ['linear', 'inverse', 'option'];
  const positionEndpoint = '/v5/position/list';
  const balanceEndpoint = '/v5/account/wallet-balance';

  const positionRequests = categories.map(category => {
    const data = `category=${category}`;
    const sign = generateSignature(data, secret, apiKey, timestamp);
    return axios.get<PositionResponse>(url + positionEndpoint, {
      headers: {
        'X-BAPI-SIGN-TYPE': '2',
        'X-BAPI-SIGN': sign,
        'X-BAPI-API-KEY': apiKey,
        'X-BAPI-TIMESTAMP': timestamp,
        'X-BAPI-RECV-WINDOW': recvWindow.toString(),
      },
      params: { category },
    }).catch(error => {
      console.error(`Error fetching data for category ${category}:`, error.response?.data || error.message);
      return null;
    });
  });

  const balanceRequest = axios.get<BalanceResponse>(url + balanceEndpoint, {
    headers: {
      'X-BAPI-SIGN-TYPE': '2',
      'X-BAPI-SIGN': generateSignature('', secret, apiKey, timestamp),
      'X-BAPI-API-KEY': apiKey,
      'X-BAPI-TIMESTAMP': timestamp,
      'X-BAPI-RECV-WINDOW': recvWindow.toString(),
    }
  }).catch(error => {
    console.error('Error fetching wallet balance:', error.response?.data || error.message);
    return null;
  });

  try {
    const [balanceResponse, ...positionResponses] = await Promise.all([balanceRequest, ...positionRequests]);
    const validPositionResponses = positionResponses.filter(response => response && response.data && response.data.result && response.data.result.list);
    const positions = validPositionResponses.flatMap(response => response.data.result.list);

    if (balanceResponse && balanceResponse.data) {
      const combinedBalance = balanceResponse.data.result;
      return NextResponse.json({ positions, combinedBalance });
    } else {
      return NextResponse.json({ positions });
    }
  } catch (error) {
    console.error('Unknown error:', error);
    return NextResponse.json({ message: 'Unknown error occurred' }, { status: 500 });
  }
}
