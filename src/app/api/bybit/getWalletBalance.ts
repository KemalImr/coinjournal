import { NextResponse } from 'next/server';

const BYBIT_API_URL = 'https://api.bybit.com/v5/account/wallet-balance';

async function fetchWalletBalance() {
    const response = await fetch(BYBIT_API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY`
        }
    });
    if (!response.ok) {
        throw new Error(`Error fetching wallet balance: ${response.statusText}`);
    }
    return response.json();
}

export async function GET(request: Request) {
    const data = await fetchWalletBalance();
    return NextResponse.json(data);
}
