import React, {useEffect, useState} from "react";
import wikiGet from "./BookCover";

import noCover from '../../img/book_red.svg';
//const noCover = 'https://commons.wikimedia.org/wiki/File:Blue_question_mark_icon.svg';

export default function Book({ title, authors, slug}) {
  const [imgUrl, setImgUrl] = useState();

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
      <img className="me-3" height={128} width={80} src={imgUrl}/>
      <a href={slug}>{title}</a> by<span> </span>
      <span id="Authors">{authors}</span>
    </>
  );
}