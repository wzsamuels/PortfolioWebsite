import React, {createContext, useState, useContext, useEffect} from "react";
import {useFetch} from "../lib/usefetch";
const BookContext = createContext({});
export const useBooks = () => useContext(BookContext);

export default function BookProvider({ children }) {
  const [books, setBooks] = useState();
    // Fetch the posts via the API
  const {
    loading,
    data,
    error
  } = useFetch('api/books/');

  // Update the post data when it changes
  useEffect(() => {
    setBooks(data);
    console.log(data);
  },[data]);

  // Add a new post to data held in memory (database is updated with fetch)
  const addBook = (id, title, authors, published, summary, slug) =>
    setBooks([
      ...books,
      {
        id,
        title,
        authors,
        published,
        summary,
        slug,
      }
    ]);



  const updateBook = (id, props) => {
    let book = books.filter(book => book.id === id)
    book = book[0];
    setBooks(books.filter(book => book.id !== id));
    console.log(JSON.stringify(book) + "\n" + JSON.stringify(books, null, 4))
    for(const prop in props) {
      book[prop] = props[prop];
    }
    setBooks([...books, book]);
  }

  //const removeBook = id => setBooks(books.filter(book => book.id !== id));

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
}