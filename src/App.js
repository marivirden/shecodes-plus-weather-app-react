import React from "react";
import Search from "./search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <footer>
          <div>
            <a href="https://github.com/marivirden/shecodes-plus-weather-app-react">
              Open-source code
            </a>
            , by <a href="https://github.com/marivirden">Marianna Virden</a>{" "}
            from <a href="https://www.shecodes.io/">SheCodes</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
