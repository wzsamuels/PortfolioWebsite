import React, {useReducer, useState} from 'react';

export default function SearchBar() {
  return (
    <>
      <input type="text" id="BookSearchInput" placeholder="Search for a book..." title="Type in a book title"/>
      Search by: Title <input type="radio" id="SearchByTitle" name="SearchType" value="title" checked/> Author <input
      type="radio" id="SearchByAuthor" name="SearchType" value="author"/>
    </>
  );
}