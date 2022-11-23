import * as React from "react";

import RestaurantReview from "../../Components/RestaurantReview/RestaurantReview";

function RestaurantPage() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((numbers) => (
    // <li>
    <RestaurantReview name="Frederick Liu" date="sept 5, 2022" review="yum" />
    // </li>
  ));
  return (
    <div style={{ margin: "5%" }}>
      <h1>Restaurant</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default RestaurantPage;
