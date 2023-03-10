// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/client'
import { groq } from 'next-sanity';
import { CommentType } from '@/types';

const commentQuery = groq`
      *[_type == "comment" && post._ref == $postID]{
    _id, 
    username, 
    email, 
    avatar,
    comment, 
    _createdAt
} | order(_createdAt desc)
`;

type Data = {
  comments: CommentType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) { 
  const { postID } = req.query;
  const comments: CommentType[] = await client.fetch(commentQuery,{postID})
  res.status(200).json({ comments })
}