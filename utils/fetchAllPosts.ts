import { PostType } from "@/types";

export const fetchAllPosts = async (): Promise<PostType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/fetchPosts`);
    const data = await res.json();
    const posts: PostType[] = data.posts;
    return posts;
}