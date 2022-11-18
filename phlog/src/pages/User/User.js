import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useParams } from "react-router-dom";

import UserSearchBar from "../../Components/UserSearchbar/UserSearchbar";

function User() {
  const [searchQuery, setSearchQuery] = useState("");
  const { userName } = useParams();
  
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
          <Grid username 
            xs={12}
            sx={{
              fontSize: 60, fontWeight: "bold" 
            }}
          >
            { userName } {/* future, use api call to get username */}
          </Grid>
          <Grid reviews> {/* future, use api to get name*/}
            <Stack spacing={2}>
              <Item>Review 1</Item>
              <Item>Review 2</Item>
              <Item>Review 3</Item>
              <Item>Review 4</Item>
              <Item>Review 5</Item>
              <Item>Review 6</Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default User;