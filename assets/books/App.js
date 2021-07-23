import React, {useEffect, useReducer, useState} from 'react';
import AddBookForm from "./AddBookForm"
import BookList from "./BookList";
import {useBooks} from "./BookProvider";
import {useFetch} from "../lib/usefetch";
import wikiGet from "./BookCover";
import noCover from "../../img/book_red.svg";

export default function App() {
  const [isBookFormVisible, toggleBookFormVisible] = useReducer(isBookFormVisible => !isBookFormVisible, false);

  return (
    <>

      <br/>
      <BookList/>
    </>
  );
}

/*
{ isBookFormVisible
        ? <AddBookForm onSubmitCancel={toggleBookFormVisible}/>
        : <button className="button-submit mb-5" onClick={toggleBookFormVisible}>Add Book</button>
      }
 */