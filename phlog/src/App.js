import * as React from "react";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/a" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
