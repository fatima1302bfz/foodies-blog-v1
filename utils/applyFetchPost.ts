import { PostType } from "../types";

export const applyFetchPost = async (slug: any): Promise<PostType> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}api/fetchSinglePost?slug=${slug}`);
  const data = await res.json();
  const post: PostType = data.post;
  // console.log(post);
  return post;
};
