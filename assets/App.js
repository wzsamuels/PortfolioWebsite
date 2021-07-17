import React, { useState } from 'react';
import {useEffect} from "react";

const EmployeeApplication = function(props) {
  // State variable to show whether we're loading data or not.
  // Defaults to "true" to show a loading screen until we get our data from the API
  const [isLoading, setIsLoading] = useState(true);
  // State variable where we'll save our list of employees
  const [employees, setEmployees] = useState([]);

  // Core API client needs to be initialized as per above and passed
  // to the component
  const client = props.client;

  // This effect will be called when the component mounts and fetch the data
  // from our API
  useEffect(
    () => {
      fetch('/react/api/employees/')
  .then(res => res.json())
  .then(
    (result) => {
        setEmployees(result);
        // and unset the "loading" flag
        setIsLoading(false);
      });
    },
    [], // this argument will prevent continually hitting the APIs on state changes.
  );

  // Show a loading state if we haven't gotten data back yet
  if (isLoading) {
    return <p>Employee data is loading...</p>;
  }
  // Show an "empty" state if we have no employees
  if (employees.length === 0) {
    return <p>No employees found!</p>;
  } else {
    // Show our employee list component with the data we got back
    return <EmployeeList employees={employees} />;
  }
}

const EmployeeList = function(props) {
  // This component renders a table of employees
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {
          props.employees.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
               </tr>
            );
          })
        }
        </tbody>
    </table>
  );
};

export default EmployeeApplication;