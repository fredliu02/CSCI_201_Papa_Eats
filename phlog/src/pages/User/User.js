import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useParams } from "react-router-dom";

import UserSearchBar from "../../Components/UserSearchbar/UserSearchbar";
import RestaurantReview from "../../Components/RestaurantReview/RestaurantReview";

function User() {
  const [searchQuery, setSearchQuery] = useState("");
  const { userName } = useParams();

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((numbers) => (
    // <li>
    <RestaurantReview name="Frederick Liu" date="Sep 5, 2022" review="Food was yum." />
    // </li>
  ));
  
  if(!useParams())
    window.location.replace("/Guest");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.primaryLight,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    minHeight: 60
  }));


  return (
    <div>
      <Box
        sx={{
          top:65,
          left:140,
          position:'relative',
          width:'80%',
        }}
      >
        <UserSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          sx={{bottom: 10}}
        />
        <Grid info>
          <Grid username 
            xs={12}
            sx={{
              fontSize: 60, fontWeight: "bold" 
            }}
          >
            { userName } {/* future, use api call to get username */}
          </Grid>
        </Grid>
        {listItems}
      </Box>
    </div>
  );
}

export default User;