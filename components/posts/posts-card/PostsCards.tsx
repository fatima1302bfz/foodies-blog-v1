import React from "react";
import { PostType } from "@/types";
import { useRouter } from "next/router";
import { truncate } from "@/truncatText";
import classes from "./postsCards.module.css";
import { urlFor } from "../../../utils/getImageURL";

interface Props {
  post: PostType;
}

const PostsCards = ({ post }: Props) => {
  const router = useRouter();
  const description = truncate(post.description, 150);

  return (
    <article className={classes["post-card"]}
      onClick={() =>
        router.push(`/post/${encodeURIComponent(post.slug.current)}`)
      }
    >
      <div className={classes["post-thumbnail"]}>
        <img
          src={urlFor(post.mainImage).url()}
          className={classes["img-fluid"]}
        />
      </div>

      <div className={classes["post-text"]}>
        <h3 className={classes["post-title"]}>{post.title}</h3>
        <div className={classes["post-description"]}>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default PostsCards;
