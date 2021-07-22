import React, { useState, useEffect } from "react";
import getCookie from "../lib/getcookie";

// fetch GET using state
export function useFetch(uri, type = "GET", formData = {}) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect prevents fetching data everytime react rerenders
  useEffect(() => {
    if (!uri) return;
    if(type === "GET") {
      fetch(uri)
        .then(data => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
      }
    }, [uri]);

  return {
    loading,
    data,
    error
  };
}

export async function fetchPost(uri, data) {
  let csrftoken = getCookie('csrftoken');

  try {
    const response = await fetch('api/posts/', {
      method: "POST",
      body: JSON.stringify(data),
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
    }})
    const returnedData = await response.json();
    return returnedData;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDelete(uri, id) {
  try {
    const response = await fetch(uri + id, {
      method: "DELETE",
    })
    return response;
  } catch (error) {
    console.error(error);
  }
}
