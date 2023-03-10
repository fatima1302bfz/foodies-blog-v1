import { PostType } from "@/types";
import React, { useContext } from "react";
import classes from "./postMainContent.module.css";
import { clientConfig } from "@/utils/ClientConfig";
import { SinglePostContext } from "@/pages/post/[slug]";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

const PostMainContent = () => {
  const postctx = useContext<PostType>(SinglePostContext);
  const { body = [] } = postctx;
  return (
    <main className={classes.mainContent}>
      <BlockContent
        blocks={body}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </main>
  );
};

export default PostMainContent;
