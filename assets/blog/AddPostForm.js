import React from "react";
import { useInput } from "../lib/hooks";
import CSRFToken from "../lib/csrftoken";
import {useFetch} from "./usefetch";
import getCookie from "../lib/getcookie";

export default function AddPostForm({onCancel}) {
    const [titleProps, resetTitle] = useInput("");
    const [textProps, resetText] = useInput("");

    // On submitting the form
    const submit = e => {
        e.preventDefault();
        onCancel();
        let form = new FormData();
        form.append('title', titleProps.value);
        form.append('text', textProps.value);
        form.append('author', $('#user').text());
        //useFetch('api/posts', "POST", form)
        const csrftoken = getCookie('csrftoken');
        fetch('api/posts/', {
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
        })
        .catch(error => {
          console.error('Error:', error);
        });
        resetTitle();
        resetText();
    };

    // The post form
    return (
        <div className="container box rounded shadow p-3 mb-5 rounded">
            <form method="POST" id="post-form" onSubmit={submit}>
                <CSRFToken />
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input {...titleProps} type="text" required placeholder="Say something..."
                        className="form-control" maxLength="50"/>
                </div>
                 <div className="mb-3">
                    <label className="form-label">Text</label>
                    <textarea {...textProps} id="post-text" required
                        placeholder="Say something..." />
                 </div>
                 <button  type="submit" className="button-green">Submit</button>
                <button className="button-green m-3" onClick={onCancel}>Cancel</button>
             </form>
        </div>
  );
}
