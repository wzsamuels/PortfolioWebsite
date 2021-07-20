import React from "react";
import { useInput } from "../lib/hooks";
import CSRFToken from "../lib/csrftoken";
import {useFetch} from "./usefetch";
import getCookie from "../lib/getcookie";

export default function AddPostForm() {
    const [titleProps, resetTitle] = useInput("");
    const [textProps, resetText] = useInput("");

        const submit = e => {
            e.preventDefault();
            let form = new FormData();
            form.append('title', titleProps.value);
            form.append('text', textProps.value);
            form.append('author', $('#user').text());
            //useFetch('api/posts', "POST", form)
            var csrftoken = getCookie('csrftoken');
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

    return (
        <div className="container bg-white rounded shadow p-3 mb-5 bg-body rounded">
            <form method="POST" id="post-form" onSubmit={submit}>
                <CSRFToken />
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input {...titleProps} type="text" required placeholder="Say something..."
                        className="form-control" maxLength="50"/>
                </div>
                 <div className="mb-3">
                    <label className="form-label">Text</label>
                    <textarea {...textProps} cols="40" rows="10" id="post-text" required
                        placeholder="Say something..." className="form-control" style={{height: "6em"}}/>
                 </div>
                 <button type="submit" className="btn btn-primary">Submit</button>
             </form>
        </div>
  );
}
