import React from "react";
import NavBar from "./components/nav_bar/NavBar";
import Main from "./components/main/Main";
import "./index.css";

function App() {
  return (
      <div>
        <NavBar title="Simpson App"/>
        <div className="container">
          <Main/>
        </div>
      </div>
  );
}

export default App;
