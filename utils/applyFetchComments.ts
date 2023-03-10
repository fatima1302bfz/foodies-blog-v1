import { CommentType } from "@/types";

export const applyFetchComments = async (postID: number | string ): Promise<CommentType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/fetchComments?postID=${postID}`);
    const data = await res.json();
    const comments: CommentType[] = data.comments;
    return comments;
}