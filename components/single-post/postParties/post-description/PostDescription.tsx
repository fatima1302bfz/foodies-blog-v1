import { PostType } from "@/types";
import React, { useContext } from "react";
import classes from "./postDescription.module.css";
import { SinglePostContext } from "@/pages/post/[slug]";

const PostDescription = () => {
  const postctx = useContext<PostType>(SinglePostContext);
  const { description = "" } = postctx;

  return <div className={classes.description}>{description}</div>;
};

export default PostDescription;
