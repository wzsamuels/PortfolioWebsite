import React from "react";
import {useBooks} from "./BookProvider";
import Book from "./Book";

export default function BookList() {
  const { books } = useBooks();
          // TODO: Sort books
  return (
    <>
      <div id="SortByTitle" className="box">
        <ul className="list">
          {books.map((book) => {
            return <li key={book.id}><Book {...book} /></li>;
          }
          )}
        </ul>
      </div>
    </>
  );
}