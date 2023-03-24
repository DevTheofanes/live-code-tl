// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IUser } from '@/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<IUser[]>) {
  /**
   * retornar os dados de dentro da database/data.json na estrutura tipada, em ordem alfabética
   */
  res.status(200).json([]);
}
