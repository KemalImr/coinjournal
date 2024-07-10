// pages/api/user/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; // Korrigiere den Importpfad, falls nötig

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const users = await prisma.user.findMany();
      console.log("Fetched users:", users);
      res.status(200).json(users);
      break;

    case 'POST':
      const { name, email } = req.body;
      const user = await prisma.user.create({
        data: { name, email },
      });
      console.log("Created user:", user);
      res.status(201).json(user);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
