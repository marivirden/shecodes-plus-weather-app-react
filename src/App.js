import React from "react";
import Search from "./search";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Homework Week 4</h1>
      <Search />
      <div>
        <a href="https://github.com/marivirden/shecodes-plus-weather-app-react">
          Open-source code
        </a>
        , by <a href="https://github.com/marivirden">Marianna Virden</a> from{" "}
        <a href="https://www.shecodes.io/">SheCodes</a>
      </div>
    </div>
  );
}
