import groq from "groq";
import Head from "next/head";
import client from "../../client";
import { createContext } from "react";
import { PostType } from "../../types";
import { useRouter } from "next/router";
import { applyFetchPost } from "@/utils/applyFetchPost";
import SinglePost from "@/components/single-post/SinglePost";

interface Props {
  post: PostType;
}

export const SinglePostContext = createContext<any>({});

const Post = ({ post }: Props) => {
  const { isReady } = useRouter();
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <SinglePostContext.Provider value={post}>
        {isReady && <SinglePost />}
      </SinglePostContext.Provider>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await applyFetchPost(slug);
  return {
    props: {
      post,
    },
  };
}

export default Post;
