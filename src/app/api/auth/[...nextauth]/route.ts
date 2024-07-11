// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { NextAuthOptions } from 'next-auth';

// const options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         apiKey: { label: 'API Key', type: 'text' },
//         apiSecret: { label: 'API Secret', type: 'password' }
//       },
//       authorize: async (credentials) => {
//         if (credentials) {
//           const user = { apiKey: credentials.apiKey, apiSecret: credentials.apiSecret };
//           return user;
//         }
//         return null;
//       }
//     })
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       if (token) {
//         session.user = {
//           ...session.user,
//           apiKey: token.apiKey,
//           apiSecret: token.apiSecret,
//         };
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.apiKey = user.apiKey;
//         token.apiSecret = user.apiSecret;
//       }
//       return token;
//     }
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// export default NextAuth(options);
