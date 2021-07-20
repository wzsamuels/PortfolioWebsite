import React, { useState } from 'react';
import {useEffect} from "react";
import {useFetch} from "./usefetch";
import AddPostForm from "./AddPostForm"

const BlogApplication = function(props) {
    const [isFormVisible, setFormVisible] = useState(false);

    // Fetch the posts via the API
    const {
    loading,
    data,
    error
  } = useFetch('api/posts/');

    if (loading) return <h1>loading...</h1>;

    if (error) {
        return (
            <>
            <AddPostForm/>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </>
        );
    }
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
        <PostList posts={data}  />
        </>
    );
}

const PostList = function({posts = []}) {

    return (
        <>
            {posts.reverse().map((post, i) => (
                <PostElement key={post.id} {...post} />
            ))}
        </>
    );
}

const PostElement = function(props) {

    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            <div className="container box p-3 mb-5 rounded">
                        <h2>{props.title}</h2>
                        <h4>by {props.author}</h4>
                { isVisible && <PostBody {...props}/> }
                <button className="button-purple mt-3" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? "Hide" : "Show"}</button>
            </div>
        </>
    );
}
const PostBody = function({  title = "None", author = "None",
                                 text = "Empty", created = new Date() }) {

    return (
        <>
            <div className="content-text">
                <p>{text}</p>
            </div>
            <div className="mt-2">
                {created}
            </div>
        </>
    );
}

export default BlogApplication;
