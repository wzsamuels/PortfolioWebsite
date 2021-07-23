import React, {useEffect, useReducer, useState} from "react";
import {useBooks} from "./BookProvider";
import Book from "./Book";

function toggleBooks(books, action) {
  if(action.id === 0)
    return initializer(action.state)
  else
    return books.filter(book => book.id === action.id);

}

const initializer = initialState => initialState;

function init(initialBooks)
{
  return initialBooks;
}

export default function BookList() {
    const { books } = useBooks();
  const [visibleBooks, setVisibleBooks] = useReducer(toggleBooks, books, initializer);
  const reset = () => setVisibleBooks({id: 0, state: books});
          // TODO: Sort books
  return (
    <>
      <div id="SortByTitle" className="box">
        <ul className="list">
          {visibleBooks.map((book) => {
            return <li key={book.id}><Book onReset={reset} onChange={setVisibleBooks} {...book} /></li>;
          }
          )}
        </ul>
      </div>
    </>
  );
}