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
    // if (username.length == 0 || password.length == 0) {
    //   throw Error("empty values");
    // }
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
    } catch (err) {
      console.log(err);
      alert("failed to log in: invalid username or password!");
      return;
    }

    if (username !== data.username || password != data.password) {
      alert("mismatch");
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    sx={{ marginBottom: "5%" }}
                    id="outlined-basic"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                onClick={() => navigate(`/%GUEST%/Homepage`)}
                sx={{ marginLeft: "20%" }} 
                variant="text">
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
