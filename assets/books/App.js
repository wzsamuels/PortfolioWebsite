import React, {useReducer, useState} from 'react';
import AddBookForm from "./AddBookForm"
import BookList from "./BookList";

export default function App() {
  const [isBookFormVisible, toggleBookFormVisible] = useReducer(isBookFormVisible => !isBookFormVisible, false);

  return (
    <>
        <input type="text" id="BookSearchInput" placeholder="Search for a book..." title="Type in a book title"/>
          Search by: Title <input type="radio" id="SearchByTitle" name="SearchType" value="title" checked/> Author <input
          type="radio" id="SearchByAuthor" name="SearchType" value="author"/>
      <br/>
      <BookList/>
      { isBookFormVisible
        ? <AddBookForm onSubmitCancel={toggleBookFormVisible}/>
        : <button className="button-submit mb-5" onClick={toggleBookFormVisible}>Add Book</button>
      }
    </>
  );
}