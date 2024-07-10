module.exports = {
  env: {
    NEXT_PUBLIC_KUCOIN_API_KEY: process.env.NEXT_PUBLIC_KUCOIN_API_KEY,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};
