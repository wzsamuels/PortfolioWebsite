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

  // Update the post data when it changes
  useEffect(() => {
    setPosts(data);
  },[data]);

  // Add a new post to data held in memory (database is updated with fetch)
  const addPost = (id, title, text, author, created) =>
    setPosts([
      ...posts,
      {
        id,
        title,
        text,
        author,
        created,
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
