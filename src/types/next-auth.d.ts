import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      apiKey: string;
      apiSecret: string;
    } & DefaultSession["user"];
  }

  interface User {
    apiKey: string;
    apiSecret: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    apiKey: string;
    apiSecret: string;
  }
}
