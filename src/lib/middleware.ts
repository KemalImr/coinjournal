// lib/middleware.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export const authenticate = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: 'No token provided.' });
    }

    const token = authorization.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      (req as any).userId = (decoded as any).userId;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token.' });
    }
  };
};
