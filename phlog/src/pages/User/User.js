import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import UserSearchBar from "../../Components/UserSearchbar/UserSearchbar";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";

function User() {
  const [searchQuery, setSearchQuery] = useState("");
  const { username } = useParams();
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(username);
  });
  const getReviews = async (username) => {
    let vef = await verify(username);
    if (!vef) {
      navigate("/Error");
      return;
    }

    let data = null;
    const reviews = await fetch(
      `https://future-badge-366719.uw.r.appspot.com/api/users/reviews/${username}`,
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

  const verify = async (username) => {
    if (username === ":GUEST:") {
      return true;
    }
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

  return (
    <div>
      <AuthNavbar username={username} />
      <Box
        sx={{
          top: 65,
          left: 140,
          position: "relative",
          width: "80%",
        }}
      >
        <UserSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          username={username}
          sx={{ bottom: 10 }}
        />
        <h1 style={{ width: "100%", textAlign: "center", fontSize: 45 }}>
          {username}
        </h1>
        <ul>
          {reviews.map((review) => (
            <ReviewCard
              restaurant={String(review.restaurant)}
              name={String(review.username)}
              date={String(review.timePosted)}
              review={String(review.textRev)}
            />
          ))}
        </ul>
        <h2 style={{ width: "100%", textAlign: "center" }}>
          You've reached the end of your reviews. Write some more to see them
          here!
        </h2>
      </Box>
    </div>
  );
}

export default User;
