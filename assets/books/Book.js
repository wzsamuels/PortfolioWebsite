import React, {useEffect, useReducer, useState} from "react";

export default function Book({ title, authors, summary, published, slug, cover}) {

  const [isSmallView, setSmallView] = useReducer(isSmallView => !isSmallView, true);

  return (
    <>
      { isSmallView
        ?
          <div onClick={() => { setSmallView() }}>
            <img className="me-3" height={128} width={80} src={cover}/>
            <a href={slug}>{title}</a> by<span> </span>
            <span id="Authors">{authors}</span>
          </div>
        :
          <div onClick={() => {setSmallView()}}>
              <div className="row">
                <div className="col-3">
                  <img className="me-3" height={256} width={160} src={cover}/>
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