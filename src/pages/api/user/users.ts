import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "@/database";
import { User } from "@/database/entity/user.entity";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const dataSource = await connect();
    const userRepository = dataSource.getRepository(User);
  
    switch (req.method) {
      case 'GET':
        const users = await userRepository.find();
        res.status(200).json(users);
        break;
  
      case 'POST':
        const user = userRepository.create(req.body);
        const result = await userRepository.save(user);
        res.status(201).json(result);
        break;
  
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }