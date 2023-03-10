// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/client'
import { groq } from 'next-sanity';
import { PostType } from '@/types';

type Data = {
    post: PostType;
}
const query = groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    "name": author->name,
    "authorImage": author->image,
    ...,
  }`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { slug } = req.query;
    const post: PostType = await client.fetch(query, { slug });
  res.status(200).json({ post })
}
