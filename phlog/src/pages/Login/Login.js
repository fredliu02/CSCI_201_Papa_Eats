import * as React from "react";
import Button from "@mui/material/Button";
import Navbar from "../../Components/Navbar";
import TextField from "@mui/material/TextField";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

function Login() {
  return (
    <div sx={{ VerticalAlign: "middle" }}>
      <Card
        variant="outlined"
        sx={{
          marginTop: "20%",
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: "1%",
        }}
      >
        <CardContent
          sx={{ display: "grid", gridAutoFlow: "row", gridColumnGap: 10 }}
        >
          <h3>Login</h3>
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
            <Button variant="contained">Signup</Button>
          </div>
        </CardContent>
      </Card>
      <Button sx={{ marginLeft: "20%" }} variant="text">
        Continue as Guest
      </Button>
    </div>
  );
}

export default Login;
