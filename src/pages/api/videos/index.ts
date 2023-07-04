// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {videos} from '@/data/data.json';
type TVideos = {
  title: string,
  url:string,
  date:string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<TVideos[]>
) {
	res.status(200).json(videos);
}
