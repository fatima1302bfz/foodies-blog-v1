import { PostType } from "@/types";
import { useRouter } from "next/router";
import classes from "./moreposts.module.css";
import { urlFor } from "@/utils/getImageURL";
import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "@/utils/fetchAllPosts";

const MorePosts = () => {
  const [posts, setMorePosts] = useState<PostType[]>([]);
  const router = useRouter();
  useEffect(() => {
      const fetchMorePosts = async () => {
        const fetchedPosts = await fetchAllPosts();
        setMorePosts(fetchedPosts);
      };
      fetchMorePosts();
  }, [])
  
  return (
    <>
      <section className={classes["more-posts"]}>
        <div className="container">
          <h2>you might also like</h2>
          <div className={classes["more-content"]}>
            {posts?.slice(0, 6)?.map((post: PostType) => (
              <div
                onClick={() =>
                  router.push(`/post/${encodeURIComponent(post.slug.current)}`)
                }
                key={post._id}
                className={classes["card"]}
              >
                <div className={classes.image}>
                  <img src={urlFor(post.mainImage).url()} alt="" />
                </div>
                <div className={classes["text"]}>
                  <h3>{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MorePosts;
