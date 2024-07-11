require('dotenv').config();

module.exports = {
    env: {
      NEXT_PUBLIC_KUCOIN_API_KEY: process.env.NEXT_PUBLIC_KUCOIN_API_KEY,
      BYBIT_API_KEY: process.env.BYBIT_API_KEY,
      BYBIT_API_SECRET: process.env.BYBIT_API_SECRET,
    },
  };
  