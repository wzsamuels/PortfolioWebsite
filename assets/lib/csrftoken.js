import React from 'react';
import getCookie from "./getcookie";

var csrftoken = getCookie('csrftoken');

const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};
export default CSRFToken;