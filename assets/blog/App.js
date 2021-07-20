import React, { useState } from 'react';
import {useEffect} from "react";
import {useFetch} from "./usefetch";
import AddPostForm from "./AddPostForm"

const BlogApplication = function(props) {
    const {
    loading,
    data,
    error
  } = useFetch('api/posts/');

    if (loading) return <h1>loading...</h1>;

    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return (
        <>
        <AddPostForm/>
        <PostList posts={data}  />
        </>
    );
}

const PostList = function({posts = []}) {

    return (
        <div className="container">
            {posts.reverse().map((post, i) => (
                <PostElement key={post.id} {...post} />
            ))}
        </div>
    );
}

const PostElement = function(props) {

    const [isVisible, setIsVisible] = useState([]);
    return (
        <>
            <div className="container bg-white rounded shadow p-3 mb-5 bg-body rounded">
                <div className="container">
                    <div className="container">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="container">
                        <h4>by {props.author}</h4>
                    </div>
                { isVisible && <PostBody {...props}/> }
                </div>
                <br/>
                <div className="container">
                    <button className="btn btn-dark" onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? "Hide" : "Show"}</button>
                </div>
            </div>
        </>
    );
}
const PostBody = function({  title = "None", author = "None",
                                 text = "Empty", created = new Date() }) {

    return (
        <>
            <div className="container bg-white border rounded p-3 mb-5 bg-body rounded">
                <p>{text}</p>
            </div>
            <div className="container">
                <p>{created}</p>
            </div>
        </>
    );
}

export default BlogApplication;
