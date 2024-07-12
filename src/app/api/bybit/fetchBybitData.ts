import { NextResponse } from 'next/server';

const BYBIT_API_URL = 'https://api.bybit.com/v2/public/';

async function fetchData(endpoint: string) {
    const response = await fetch(`${BYBIT_API_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error(`An error occurred while fetching the data: ${response.statusText}`);
    }
    return response.json();
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get('endpoint') || 'market';
    const data = await fetchData(endpoint);
    return NextResponse.json(data);
}

export async function fetchBybitData(endpoint: string) {
    const response = await fetch(`/api/fetchBybitData?endpoint=${endpoint}`);
    const data = await response.json();
    return data;
}
