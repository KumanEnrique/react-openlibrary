import React from "react";
import { render } from "react-dom";
import App from './components/App'

render(<App/>,document.getElementById("app"))


function isValidJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}

console.log(isValidJSON(`{"name:"lopez"}`))