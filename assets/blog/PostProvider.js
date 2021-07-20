import React, {createContext, useState, useContext, useEffect} from "react";
import {useFetch} from "./usefetch";
const PostContext = createContext({});
export const usePosts = () => useContext(PostContext);

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState();
    // Fetch the posts via the API
  const {
    loading,
    data,
    error
  } = useFetch('api/posts/');

  useEffect(() => {
    setPosts(data);
  },[data]);


  const addPost = (title, text, author) =>
    setPosts([
      ...posts,
      {
        title,
        text,
        author,
      }
    ]);

  const removePost = id => setPosts(posts.filter(post => post.id !== id));

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <PostContext.Provider value={{ posts, addPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
}
