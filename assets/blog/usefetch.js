import React, { useState, useEffect } from "react";

export function useFetch(uri, type = "GET", formData = {}) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!uri) return;
        if(type === "GET") {
            fetch(uri)
              .then(data => data.json())
              .then(setData)
              .then(() => setLoading(false))
              .catch(setError);
        }
        if(type === "POST") {
            var csrftoken = getCookie('csrftoken');
           // data : { text : $('#post-text').val(), author: $('#user').text(), title: $('#post-title').val()}
            fetch(uri, {
                method: "POST",
                mode: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: formData
            }).then(data => data.json())
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

