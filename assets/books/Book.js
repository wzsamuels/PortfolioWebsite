import React, {useEffect, useReducer, useState} from "react";
import wikiGet from "./BookCover";

import noCover from '../../img/book_red.svg';
//const noCover = 'https://commons.wikimedia.org/wiki/File:Blue_question_mark_icon.svg';

export default function Book({ title, authors, summary, published, slug, onChange, id, onReset}) {
  const [imgUrl, setImgUrl] = useState();
  const [isSmallView, setSmallView] = useReducer(isSmallView => !isSmallView, true);

  useEffect(() => {
    wikiGet(title)
      .then(result => {
        if(result !== null) {
          //console.log(result);
          setImgUrl(result)
        }
        else
          setImgUrl(noCover);
      });
  }, []);

  return (
    <>
      { isSmallView
        ?
          <div onClick={() => { setSmallView(); onChange({ id: id, state: "none" }) } }>
            <img className="me-3" height={128} width={80} src={imgUrl}/>
            <a href={slug}>{title}</a> by<span> </span>
            <span id="Authors">{authors}</span>
          </div>
        :
          <div onClick={() => {setSmallView();onReset();}}>
            <div className="row">
              <div className="col-3">
                <img className="me-3" height={256} width={160} src={imgUrl}/>
              </div>
              <div className="col">
                <div className="row">
                  <a href={slug}>{title}</a>
                  <p>by {authors}</p>
                </div>
                <div className="row">
                  <p>Published: {published}</p>
                  <p>Summary:</p>
                  <p>{summary}</p>
                </div>
              </div>
              </div>
          </div>
      }

    </>
  );
}