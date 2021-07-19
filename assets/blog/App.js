import React, { useState } from 'react';
import {useEffect} from "react";

const BlogApplication = function(props) {
    // State variable to show whether we're loading data or not.
    // Defaults to "true" to show a loading screen until we get our data from the API
     const [isLoading, setIsLoading] = useState(true);
    // State variable where we'll save our list of employees
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        $.ajax({
            url: 'api/posts/',
            dataType: 'json',
            cache: false,
            success: function (data) {
                setPosts(data);
                setIsLoading(false);
            }.bind(this),
            error : function(xhr,errmsg,err) {
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    },[],);

  // Show a loading state if we haven't gotten data back yet
  if (isLoading) {
    return <p>Posts are loading...</p>;
  }
  // Show an "empty" state if we have no employees
  if (posts.length === 0) {
    return <p>No posts found!</p>;
  } else {
    return <PostList posts={posts} />;
  }
}

const PostList = function(props) {
    return (
        <div className="container" id="talk">
            {
                props.posts.map((post, index) => {
                    return (
                        <div className="container bg-white rounded shadow p-3 mb-5 bg-body rounded">
                            <div className="container">
                                <h2>{post.title}</h2>
                            </div>
                            <div className="container">
                                <h4>by {post.author}</h4>
                            </div>
                            <div className="container">
                                <p>{post.text}</p>
                            </div>
                            <div className="container">
                                <p>{post.created}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default BlogApplication;
