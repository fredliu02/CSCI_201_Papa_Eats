import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";
import UserSearchBar from "../../Components/UserSearchbar/UserSearchbar";

function Guest() {
  const { username } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <AuthNavbar username={username}/>
      <Box
        sx={{
          top:65,
          left:140,
          position:'relative',
          width:'80%',
        }}
      >
        <UserSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} username={username}
          sx={{bottom: 10}}
        />
        <Grid info>
          <Grid guestname 
            xs={12}
            sx={{
              fontSize: 60, fontWeight: "bold" 
            }}
          >
            Guest
          </Grid>
          <Grid signup>
            You aren't signed in right now. Click <Link to="/SignUp"> here</Link> to sign up and make your own reviews! Or, use the search to find other users and their reviews.
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Guest;