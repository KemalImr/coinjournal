// pages/api/user/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, firstName, lastName, password } = req.body;
    
    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          password,
        },
      });

      res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating user.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
