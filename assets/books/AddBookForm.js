 import React, {useEffect, useRef} from "react";
import { useInput } from "../lib/hooks";
import CSRFToken from "../lib/csrftoken";
import {useFetch} from "../lib/usefetch";
import getCookie from "../lib/getcookie";
import {useBooks} from "./BookProvider";

export default function AddPostForm({onSubmitCancel}) {
  const [titleProps, resetTitle] = useInput("");
  const [authorsProps, resetAuthors] = useInput("");
  const { addBook } = useBooks();

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
    onSubmitCancel();
    let form = new FormData();
    // Right now the current user is taken from a Django template
    // TODO: Set up a proper API to retrieve the user
    const title = titleProps.value;
    const authors = authorsProps.value;
    form.append('title', title);
    form.append('authors', authors);
    //useFetch('api/posts', "POST", form)
    // TODO: Make useFetch work here for POST request
    const csrftoken = getCookie('csrftoken');
    fetch('api/books/', {
        method: "POST",
        body: form,
        mode: 'same-origin',
        headers: {
            'X-CSRFToken': csrftoken
        },
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      //addPost(result.id, result.title, result.text, result.author, result.created);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    resetTitle();
    resetAuthors();
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
                  <textarea {...authorsProps} id="post-text" required
                      placeholder="Say something..." />
               </div>
               <button  type="submit" className="button-submit">Submit</button>
              <button className="button-cancel m-3" onClick={onSubmitCancel}>Cancel</button>
           </form>
      </div>
  );
}