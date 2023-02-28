import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data/slot-data.json';

interface Data {
  data: unknown;
}

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): void {
  res.status(200).json({ data });
}
