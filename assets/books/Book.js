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
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img className="image-fluid" height={256} width={160}  src={cover}/>
                </div>
                <div className="col-6">
                  <a href={slug}>{title}</a> by {authors}<br/>
                  Published: {published}

                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Summary:<br/>
                    {summary}</p>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}