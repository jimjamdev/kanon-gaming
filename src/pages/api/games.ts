import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data/game-data.json';

interface Data {
  data: unknown;
}

// eslint-disable-next-line import/no-default-export
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): void {
  res.status(200).json({ data });
}
