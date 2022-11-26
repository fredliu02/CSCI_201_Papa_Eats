import * as React from "react";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import HomePage from "./Pages/HomePage/HomePage";
import SignUp from "./Pages/SignUp/SignUp";
import AmericanPage from "./Pages/AmericanPage/AmericanPage";
import ItalianPage from "./Pages/ItalianPage/ItalianPage";
import MexicanPage from "./Pages/MexicanPage/MexicanPage.js";
import ChinesePage from "./Pages/ChinesePage/ChinesePage";
import JapanesePage from "./Pages/JapanesePage/JapanesePage";
import IndianPage from "./Pages/IndianPage/IndianPage";
import CoffeePage from "./Pages/CoffeePage/CoffeePage";
import OtherPage from "./Pages/OtherPage/OtherPage";
import ErrorPage from "./Pages/Errorpage/ErrorPage";
import User from "./Pages/User/User";
import Guest from "./Pages/Guest/Guest";
import OtherUser from "./Pages/OtherUser/OtherUser";

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/:username/R/:restaurant"
          element={<RestaurantPage />}
        />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Signup" element={<SignUp />} />
        <Route exact path="/:username/HomePage" element={<HomePage />} />
        <Route exact path="/:username/SignUp" element={<SignUp />} />
        <Route exact path="/:username/American" element={<AmericanPage />} />
        <Route exact path="/:username/Italian" element={<ItalianPage />} />
        <Route exact path="/:username/Mexican" element={<MexicanPage />} />
        <Route exact path="/:username/Chinese" element={<ChinesePage />} />
        <Route exact path="/:username/Japanese" element={<JapanesePage />} />
        <Route exact path="/:username/Indian" element={<IndianPage />} />
        <Route exact path="/:username/Coffee" element={<CoffeePage />} />
        <Route exact path="/:username/Other" element={<OtherPage />} />
        <Route exact path ="/:username/User" element={<User />} />
        <Route exact path ="/:username/Guest" element={<Guest />} />
        <Route exact path ="/:username/:search/OtherUser" element={<OtherUser />} />
        <Route exact path="/Error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
