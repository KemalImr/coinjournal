// lib/prisma.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

prisma.$use(async (params: any, next: (params: any) => Promise<any>) => {
  if (params.model === 'User') {
    if (params.action === 'create' || params.action === 'update') {
      const user = params.args.data;
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
  return next(params);
});

export default prisma;
