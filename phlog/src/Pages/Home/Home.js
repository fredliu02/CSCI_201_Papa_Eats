import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Grid } from "@mui/material";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const apiPost = async (username, password) => {
    if (username.length === 0 || password.length === 0) {
      alert("Please enter your username and password");
      return;
    }
    const strForm = "username=" + username + "&password=" + password;
    const response = await fetch(
      "https://future-badge-366719.uw.r.appspot.com/login",
      {
        // Enter your IP address here

        method: "POST",
        mode: "cors",

        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: strForm, // body data type must match "Content-Type" header
      }
    );

    if (!response.ok) {
      alert("failed to log in: incorrect username or password!");
    } else {
      navigate(`/${username}/Homepage`);
    }
  };

  const navigateToSignUp = () => {
    // 👇️ navigate to /contacts
    navigate("/SignUp");
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ flexGrow: 1, margin: "10%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h1>Welcome to Papa Eats!</h1>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h3>
              Papa Eats strives to bring people together through food, connect with
              your friends to discover restaurants in your area and see the
              restaurants they love.
            </h3>
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
                    value={username}
                    onChange={(info) => setUsername(info.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ marginBottom: "5%" }}
                    id="outlined-basic"
                    label="Password"
                    value={password}
                    onChange={(info) => setPassword(info.target.value)}
                    variant="outlined"
                  />
                  <div
                    sx={{
                      marginBottom: "5%",
                    }}
                  >
                    <Button
                      onClick={() => apiPost(username, password)}
                      sx={{ marginRight: "2%" }}
                      variant="contained"
                    >
                      Login
                    </Button>
                    <Button onClick={navigateToSignUp} variant="contained">
                      Signup
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Button
                onClick={() => navigate(`/:GUEST:/Homepage`)}
                sx={{ marginLeft: "20%" }}
                variant="text"
              >
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
