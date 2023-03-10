import Head from "next/head";
import Hero from "@/components/hero/Hero";
import { useContext, useEffect } from "react";
import { PostsContext } from "@/utils/Context";
import PostsList from "@/components/posts/PostsList";
import { fetchAllPosts } from "@/utils/fetchAllPosts";
import Newsletter from "@/components/newsletter/Newsletter";

const Index = () => {
  const postCtx = useContext(PostsContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetchAllPosts();
      postCtx.setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>TasteBit Blog</title>
      </Head>
      <Hero />
      <PostsList />
      <Newsletter />
    </>
  );
};

export default Index;
