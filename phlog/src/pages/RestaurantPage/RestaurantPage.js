import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import { Button } from "@mui/material";
import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";

function RestaurantPage() {
  const { username, restaurant } = useParams();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getReviews(username, restaurant);
  });

  const getReviews = async (username, restaurant) => {
    let vef = await verify(username);
    if (!vef) {
      navigate("/Error");
      return;
    }
    const response = await fetch(
      `https://future-badge-366719.uw.r.appspot.com/api/restaurants/name/${restaurant}`,
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
    } catch (err) {
      console.log(err);
      navigate("/Error");
      return;
    }

    const reviews = await fetch(
      `https://future-badge-366719.uw.r.appspot.com/api/restaurants/${data.id}/reviews`,
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
  const actions = (username) => {
    if (username === ":GUEST:") {
      return (
        <div>
          <h3>Sign-up to write a review</h3>
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/Signup`);
            }}
          >
            Signup
          </Button>
        </div>
      );
    } else {
      return (
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/${username}/Homepage`);
          }}
        >
          Write a review
        </Button>
      );
    }
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

  return (
    <div>
      <AuthNavbar />
      <div
        style={{
          marginTop: "5%",
          width: "100%",
        }}
      >
        <h1 style={{ width: "100%", textAlign: "center" }}>{restaurant}</h1>
        <div style={{ width: "100%", textAlign: "center" }}>
          {actions(username)}
        </div>

        <ul>
          {reviews.map((review) => (
            <ReviewCard
              name={String(review.username)}
              date={String(review.timePosted)}
              review={String(review.textRev)}
            />
          ))}
        </ul>
        <h2 style={{ width: "100%", textAlign: "center" }}>End of Reviews</h2>
      </div>
    </div>
  );
}

export default RestaurantPage;
