import { PostType } from "@/types";
import React, { useContext, useState } from "react";
import classes from "./postList.module.css";
import { PostsContext } from "@/utils/Context";
import PostsCards from "./posts-card/PostsCards";

const PostsList = () => {
  const postCtx = useContext(PostsContext);
  const posts = postCtx.posts;
  const nbPostToShow = 2;
  const [loadMore, setLoadMore] = useState(nbPostToShow);
  const handleMore = () => {
    setLoadMore(loadMore + nbPostToShow);
  };

  return (
    <section className={classes.postsList}>
      <div className="post-container">
        <h2>Posts</h2>
        <div className={classes.postsCards}>
          {posts.length > 0 &&
            posts?.slice(0, loadMore)?.map(
              (post: PostType) =>
                post.slug && <PostsCards post={post} key={post._id} />
            )}
        </div>
        {posts?.length > loadMore && (
            <div className={classes["more"]}>
              <button className={classes["btn"]} onClick={handleMore}>
                load more
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default PostsList;
