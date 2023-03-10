import classes from "./comments.module.css";
import { CommentType, PostType } from "@/types";
import React, { useContext, useEffect, useState } from "react";
import { SinglePostContext } from "@/pages/post/[slug]";
import SingleComment from "./single-comment/SingleComment";
import { applyFetchComments } from "@/utils/applyFetchComments";
interface Props {
  comments: CommentType[];
}
const Comments = ({comments}: Props) => {
  const nbCommentToShow = 2;
  const [loadMore, setLoadMore] = useState(nbCommentToShow);
  const handleMore = () => {
    setLoadMore(loadMore + nbCommentToShow);
  };
  return (
    <section className={classes.comments}>
      <h2>
        Comments <span>({comments?.length})</span>
      </h2>
      {comments?.length > 0 ? (
        <>
          <ul className={classes["comments-list"]}>
            {comments?.slice(0, loadMore)?.map((commentItem: CommentType) => (
              <SingleComment key={commentItem?._id} commentItem={commentItem} />
            ))}
          </ul>
          {comments?.length > loadMore && (
            <div className={classes["more"]}>
              <button className={classes["btn"]} onClick={handleMore}>
                load more
              </button>
            </div>
          )}
        </>
      ) : (
        <p> No comment here, Be the first one who comment on this post. </p>
      )}
    </section>
  );
};

export default Comments;
