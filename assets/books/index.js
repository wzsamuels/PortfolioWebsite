import React from 'react';
import {render} from "react-dom";
import App from "./App"
import BookProvider from "./BookProvider";

render(
  <BookProvider>
    <App/>
  </BookProvider>,
  document.getElementById('root')
);