import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import UserSearchBar from "../../Components/UserSearchbar/UserSearchbar";
import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

function OtherUser() {
  const [searchQuery, setSearchQuery] = useState("");
  const { username, search } = useParams();
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(username, search);
  });
  const getReviews = async (username, search) => {
    let vef = await verifySearch(search);
    let vef2 = await verifyUser(username);
    if (!vef || !vef2) {
      navigate("/Error");
      return;
    }

    let data = null;
    const reviews = await fetch(
      `https://future-badge-366719.uw.r.appspot.com/api/users/reviews/${search}`,
      {
        Method: "GET",
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      }
    );
    try {
      data = await reviews.json();
    } catch (err) {
      console.log(err);
      alert("failed to retrieve reivews!");
      return;
    }
    setReviews(data);
  };

  const verifySearch = async (search) => {
    console.log(search);
    const response = await fetch(
      "https://future-badge-366719.uw.r.appspot.com/api/users/username/" +
        search,
      {
        Method: "GET",
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      }
    );
    let data = null;
    try {
      data = await response.json();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const verifyUser = async (username) => {
    console.log(username);
    if (username === ":GUEST:") return true;

    const response = await fetch(
      "https://future-badge-366719.uw.r.appspot.com/api/users/username/" +
        username,
      {
        Method: "GET",
        Headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      }
    );
    let data = null;
    try {
      data = await response.json();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const numbers = [1, 2, 3, 4, 5];

  const route = () => {
    console.log(username);
    if (username === ":GUEST:") {
      console.log("in here");
      navigate("/" + username + "/Guest");
    } else navigate("/" + username + "/User");

    return;
  };

  return (
    <div>
      <AuthNavbar username={username} />
      <div
        style={{ top: 65, left: 140, position: "relative", display: "inline" }}
      >
        <Box
          sx={{
            width: "80%",
            display: "inline-block",
          }}
        >
          <UserSearchBar
            component="Box"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            username={username}
          />
        </Box>
        <Button
          component="Box"
          startIcon={<ArrowBackIcon />}
          sx={{
            top: 5,
            right: 1050,
            verticalAlign: "top",
            display: "inline-block",
          }}
          onClick={() => {
            route();
          }}
        ></Button>
      </div>
      <div>
        <Box
          sx={{
            top: 65,
            left: 140,
            position: "relative",
            width: "80%",
          }}
        >
          <h1 style={{ width: "100%", textAlign: "center", fontSize: 45 }}>
            {search}
          </h1>
          <ul>
            {reviews.map((review) => (
              <ReviewCard
                restaurant={String(review.restaurantName)}
                name={String(review.username)}
                date={String(review.timePosted)}
                review={String(review.textRev)}
              />
            ))}
          </ul>
          <h2 style={{ width: "100%", textAlign: "center" }}>
            You've reached the end of {search}'s reviews. Search for other users
            to read their reviews!{" "}
          </h2>
        </Box>
      </div>
    </div>
  );
}

export default OtherUser;
