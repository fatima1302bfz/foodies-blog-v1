import { format } from "date-fns";
import { PostType } from "@/types";
import React, { useContext } from "react";
import { urlFor } from "@/utils/getImageURL";
import classes from "./postHeader.module.css";
import { SinglePostContext } from "@/pages/post/[slug]";

const PostHeader = () => {
  const {
    _id,
    title,
    publishedAt,
    authorImage,
    name,
  } = useContext<PostType>(SinglePostContext);


  return (
    <header className={classes.postHeader}>
      <h1>{title}</h1>
      <ul className={classes["post-info"]}>
        {authorImage && (
          <li className={classes["author-info"]}>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img src={urlFor(authorImage).url()} alt={`${name}'s picture`} />
            <span className={classes.text}>{name}</span>
          </li>
        )}
        <li className={classes.text}>
          <i className="fa-regular fa-calendar"></i>
          {format(new Date(publishedAt), "dd-MM-yyyy")}
        </li>
        <li className=''>
          <i className="fa-regular fa-heart"></i>
          <span className={classes.text}>0</span>
        </li>
      </ul>
    </header>
  );
};

export default PostHeader;
