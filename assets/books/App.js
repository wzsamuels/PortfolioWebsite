import React, {useReducer, useState} from 'react';
import AddBookForm from "./AddBookForm"
import BookList from "./BookList";
import {useBooks} from "./BookProvider";

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