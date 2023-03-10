import { PostType } from "@/types";
import React, { useContext } from "react";
import classes from "./postHero.module.css";
import { urlFor } from "@/utils/getImageURL";
import { SinglePostContext } from "@/pages/post/[slug]";

const PostHero = () => {
  const postctx = useContext<PostType>(SinglePostContext);
  const { mainImage, title } = postctx;
  return (
    <>
      {/*eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(mainImage).url()}
          alt={title}
          className={classes.mainImage}
        />
    </>
  );
};

export default PostHero;
