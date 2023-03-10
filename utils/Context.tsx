import { createContext, useState } from "react";

export const PostsContext = createContext<any>({});

const Context = ({ children }: any) => {
  const [posts, setPosts] = useState([]);
  const shareData = {
    posts,
    setPosts,
  };

  return (
    <PostsContext.Provider value={shareData}>
      {children}
    </PostsContext.Provider>
  );
};
export default Context;
