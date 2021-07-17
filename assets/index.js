import React from 'react';
import ReactDOM from "react-dom";
import EmployeeApplication from "./App";

const coreapi = window.coreapi;
const schema = window.schema;

let auth = new coreapi.auth.SessionAuthentication({
    csrfCookieName: 'csrftoken',
    csrfHeaderName: 'X-CSRFToken',
});
let coreclient = new coreapi.Client({auth: auth});

ReactDOM.render(
  // Our main React application component, which we've imported from another file
  <EmployeeApplication client={coreclient}/>,
  // Gets rendered to the <div> we defined in our Django template using the shared id
  document.getElementById('js-framework-home')
);