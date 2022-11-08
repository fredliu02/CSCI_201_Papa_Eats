import * as React from "react";
import logo from "./logo.svg";
import Button from "@mui/material/Button";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome!</h1>
      </header>
    </div>
  );
}

export default App;
