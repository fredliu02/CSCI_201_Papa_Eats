import * as React from "react";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

function Navbar() {
  const [inBar, openBar] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 5,
          }}
        >
          <Button
            sx={{ color: "white", fontSize: 20, fontWeight: "bold" }}
            onClick={() => {
              window.location.replace("/");
            }}
          >
            Papa Eats
          </Button>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
