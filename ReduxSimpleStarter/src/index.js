import ReactDOM from "react-dom";
import React from "react";
import SearchBar from "./components/search_bar";
const API_KEY = "AIzaSyDaQXAjNgrNqG4DIjM5lruurT6TcFZi57s";
// Create a new component
// This component should produce come HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
