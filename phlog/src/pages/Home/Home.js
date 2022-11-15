import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navbar from "../../Components/Navbar";

function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "10%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h1>Welcome to Phlog!</h1>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h4>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Grid item xs={5}></Grid>
            <Grid item xs={1}>
              <Button
                variant="contained"
                onClick={() => {
                  window.location.replace("/Login");
                }}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained">Signup</Button>
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
