import React from "react";
import ReactDOM from "react-dom";
import SearchExampleStandard from "../src/Components/searchTest.jsx";
import ButtonExampleButton from "../src/Components/buttonExampleButton.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SearchExampleStandard />
      <ButtonExampleButton />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
