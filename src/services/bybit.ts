import axios from 'axios';

const BYBIT_BASE_URL = 'https://api.bybit.com';

interface BalanceResponse {
  ret_code: number;
  ret_msg: string;
  result: any;
  ext_code: string;
  ext_info: string;
  time_now: string;
  rate_limit_status: number;
  rate_limit_reset_ms: number;
  rate_limit: number;
}

export const getAccountBalance = async (apiKey: string, apiSecret: string): Promise<BalanceResponse> => {
  try {
    const response = await axios.get(`${BYBIT_BASE_URL}/v2/private/wallet/balance`, {
      headers: {
        'X-BYBIT-API-KEY': apiKey,
        'X-BYBIT-API-SECRET': apiSecret,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching account balance:', error);
    throw error;
  }
};
