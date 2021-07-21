import React, {useState} from "react";

export default function Post(props) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="container box p-3 mb-5 rounded">
                  <h2>{props.title}</h2>
                  <h4>by {props.author}</h4>
          { isVisible && <PostBody {...props}/> }
          <button className="button-primary mt-3" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? "Hide" : "Show"}</button>
      </div>
    </>
  );
}
function PostBody({  title = "None", author = "None",
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