import * as React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: 5,
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button sx={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Phlog
        </Button>
      </AppBar>
    </Box>
  );
}

export default Navbar;
