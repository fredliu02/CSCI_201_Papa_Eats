import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navbar from "../../Components/Navbar/Navbar";

function Cuisines() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "10%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h1>Welcome to Phlog!</h1>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h4>
              Welcome to the Cuisines Page!
            </h4>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Cuisines;
