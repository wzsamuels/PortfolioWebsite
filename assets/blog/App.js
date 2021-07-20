import React, {createContext, useState} from 'react';
import {useEffect} from "react";
import {useFetch} from "./usefetch";
import AddPostForm from "./AddPostForm"
import PostList from "./PostList";

export default function App() {
  const [isFormVisible, setFormVisible] = useState(false);

  return (
   <>
      { isFormVisible
        ? (
            <>
                <AddPostForm onCancel={() => setFormVisible(false)}/>
            </>
        )
        : <button className="button-green mb-5" onClick={() => setFormVisible(!isFormVisible)}>Create Post</button>
      }
    <PostList/>
    </>
  );
}