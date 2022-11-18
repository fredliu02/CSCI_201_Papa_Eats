import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useState } from "react";
import { Link } from "react-router-dom";


import UserSearchBar from "../../Components/UserSearchbar/UserSearchbar";

function Guest() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <UserSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Box
        sx={{
          top:120,
          left:140,
          position:'fixed',
          width:'80%',
        }}
      >
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
            You aren't signed in right now. Click <Link to="/"> here</Link> to sign up and make your own reviews! Or, use the search to find other users and their reviews.
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Guest;