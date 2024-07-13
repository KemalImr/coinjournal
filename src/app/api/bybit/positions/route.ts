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

  const endpoint = '/v5/position/list';
  const categories = ['linear', 'inverse', 'option'];
  const requests = categories.map(category => {
    const data = `category=${category}`;
    const sign = generateSignature(data, secret, apiKey, timestamp);
    return axios.get(url + endpoint, {
      headers: {
        'X-BAPI-SIGN-TYPE': '2',
        'X-BAPI-SIGN': sign,
        'X-BAPI-API-KEY': apiKey,
        'X-BAPI-TIMESTAMP': timestamp,
        'X-BAPI-RECV-WINDOW': recvWindow.toString(),
      },
      params: {
        category,
      },
    }).catch(error => {
      console.error(`Error fetching data for category ${category}:`, error.response?.data || error.message);
      return null;  // Ensure the Promise.all can handle this
    });
  });

  try {
    const responses = await Promise.all(requests);
    const validResponses = responses.filter(response => response && response.data && response.data.result && response.data.result.list);
    const positions = validResponses.flatMap(response => response.data.result.list);
    return NextResponse.json({ positions });
  } catch (error) {
    console.error('Unknown error:', error);
    return NextResponse.json({ message: 'Unknown error occurred' }, { status: 500 });
  }
}
