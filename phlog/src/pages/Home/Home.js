import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Card, CardContent, Grid } from "@mui/material";

function Home() {

  const navigate = useNavigate();

  const navigateToSignUp = () => {
    // 👇️ navigate to /contacts
    navigate('/SignUp');
  };


  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "10%" }}>
        <Grid container>
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
          <Grid item xs={12}>
            <div>
              <Card
                variant="outlined"
                sx={{
                  marginTop: "5%",
                  marginLeft: "20%",
                  marginRight: "20%",
                  marginBottom: "1%",
                }}
              >
                <CardContent
                  sx={{
                    display: "grid",
                    gridAutoFlow: "row",
                    gridColumnGap: 10,
                  }}
                >
                  <h3>Login!</h3>
                  <TextField
                    sx={{ marginBottom: "5%" }}
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ marginBottom: "5%" }}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                  />
                  <div
                    sx={{
                      marginBottom: "5%",
                    }}
                  >
                    <Button sx={{ marginRight: "2%" }} variant="contained">
                      Login
                    </Button>
                    <Button onClick={navigateToSignUp} variant="contained">Signup</Button>
                  </div>
                </CardContent>
              </Card>
              <Button sx={{ marginLeft: "20%" }} variant="text">
                Continue as Guest
              </Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
