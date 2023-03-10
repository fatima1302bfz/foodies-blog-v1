import classes from "./singlePost.module.css";
import { CommentType, PostType } from "@/types";
import MorePosts from "../more-posts/MorePosts";
import Form from "../comment-system/comment-form/Form";
import { SinglePostContext } from "@/pages/post/[slug]";
import PostHero from "./postParties/post-hero/PostHero";
import Comments from "@/components/comment-system/Comments";
import PostHeader from "./postParties/postHeader/PostHeader";
import React, { useContext, useEffect, useState } from "react";
import { applyFetchComments } from "@/utils/applyFetchComments";
import PostDescription from "./postParties/post-description/PostDescription";
import PostMainContent from "./postParties/post-main-content/PostMainContent";

const SinglePost = () => {
  const singlepost = useContext<PostType>(SinglePostContext);
  const [comments, setAllComments] = useState<CommentType[]>([]);
  
  useEffect(() => {
    const fetchComments = async () => {
      const fetchedComments = await applyFetchComments(singlepost._id);
      setAllComments(fetchedComments);
    };
    fetchComments();
  }, [singlepost._id]);

  const refreshComments = async () => {
    const comments: CommentType[] = await applyFetchComments(singlepost._id);
    setAllComments(comments);
  };


  return (
    <>
      <article className={classes.singlePost}>
        <div className="post-container">
          <PostHeader />
          <PostDescription />
          <PostHero />
          <PostMainContent />
        </div>
        <div className="container">
          <Comments comments={comments} />
          <Form postID={singlepost._id} refreshComments={refreshComments} />
        </div>
      </article>
      <MorePosts />
    </>
  );
};

export default SinglePost;
