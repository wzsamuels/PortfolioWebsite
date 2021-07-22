import React, {useState} from 'react';
import AddPostForm from "./AddPostForm"
import PostList from "./PostList";

export default function App() {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
    <>
      { isFormVisible
        ? <AddPostForm onFormClose={() => setFormVisible(false)}/>
        : <button className="button-submit mb-5" onClick={() => setFormVisible(!isFormVisible)}>Create Post</button>
      }
      <PostList/>
    </>
  );
}