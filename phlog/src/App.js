import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Restaurant" element={<RestaurantPage />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
