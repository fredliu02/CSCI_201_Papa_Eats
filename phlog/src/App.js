import * as React from "react";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AuthNavbar from "./Components/AuthNavbar/AuthNavbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Cuisines from "./Pages/Cuisines/Cuisines"
import User from "./Pages/User/User"
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage"
import OtherUser from "./Pages/OtherUser/OtherUser"
import Guest from "./Pages/Guest/Guest"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // <Route render={() => 
  // this.state.isLoggedIn ? 
  // <User /> : 
  // <Redirect to="/home"/> 
  // }
  return (
    <div>
      <AuthNavbar />
      <Routes>
        <Route exact path="/Restaurant" element={<RestaurantPage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login onLogin={(isLoggedIn) => {setIsLoggedIn(isLoggedIn)}} />} />
        <Route exact path="/Cuisines" element={<Cuisines />} />
        <Route exact path="/User/:userName" element={<User />} />
        <Route exact path="/OtherUser/:userName" element={<OtherUser />}/>
        <Route exact path="/Guest" element={<Guest />} />
      </Routes>
    </div>
  );
}

export default App;
