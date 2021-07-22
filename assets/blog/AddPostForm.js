import React, {useEffect, useRef} from "react";
import { useInput } from "../lib/hooks";
import CSRFToken from "../lib/csrftoken";
import {fetchPost, useFetch} from "../lib/usefetch";
import getCookie from "../lib/getcookie";
import {usePosts} from "./PostProvider";

export default function AddPostForm({onFormClose}) {
  const [titleProps, resetTitle] = useInput("");
  const [textProps, resetText] = useInput("");
  const { addPost } = usePosts();

  // Focus on form when it renders
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  // On submitting the form
  const submit = e => {
    e.preventDefault();
    onFormClose();
    fetchPost('api/posts/', {title: titleProps.value, text: textProps.value})
      .then(result =>
        addPost(result.id, result.title, result.text, result.author, result.created)
    );
    resetTitle();
    resetText();
  };

  // The post POST form
  return (
      <div className="container box rounded shadow p-3 mb-5 rounded">
          <form method="POST" id="post-form" onSubmit={submit}>
              <CSRFToken />
              <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input {...titleProps} type="text" ref={inputElement} required placeholder="Say something..."
                      className="form-control" maxLength="50"/>
              </div>
               <div className="mb-3">
                  <label className="form-label">Text</label>
                  <textarea {...textProps} id="post-text" required
                      placeholder="Say something..." />
               </div>
               <button  type="submit" className="button-submit">Submit</button>
              <button className="button-cancel m-3" onClick={onFormClose}>Cancel</button>
           </form>
      </div>
  );
}
/*
    form.append('title', title);
    form.append('text', text);
    //form.append('author', author);
    //useFetch('api/posts', "POST", form)
    // TODO: Make useFetch work here for POST request
    const csrftoken = getCookie('csrftoken');
    fetch('api/posts/', {
        method: "POST",
        body: JSON.stringify({ title, text }),
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);

    })
    .catch(error => {
      console.error('Error:', error);
    });
 */