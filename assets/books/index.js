import React from 'react';
import {render} from "react-dom";
import App from "./App"
import BookProvider from "./BookProvider";

render(
  <React.StrictMode>
    <BookProvider>
      <App/>
    </BookProvider>
  </React.StrictMode>,
  document.getElementById('root')
);