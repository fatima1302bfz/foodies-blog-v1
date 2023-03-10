// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/client'
import { groq } from 'next-sanity';
import { PostType } from '@/types';

type Data = {
    posts: PostType[];
}
const query = groq`*[_type == "post"] | order(publishedAt desc)`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const posts: PostType[] = await client.fetch(query);
  res.status(200).json({ posts })
}