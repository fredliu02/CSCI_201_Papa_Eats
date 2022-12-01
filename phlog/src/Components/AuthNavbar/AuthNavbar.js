import * as React from 'react';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Sidebar from '../Sidebar/Sidebar'
import SidebarMenu from '../SidebarMenu/SidebarMenu'

function AuthNavbar({username}) {
  const [inBar, openBar] = useState(false);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme = {theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 5,
          }}
        >
          <div>
            <Sidebar inBar={inBar} openBar={openBar}/>
            <SidebarMenu inBar={inBar} openBar={openBar} username={username}/>
          </div>
          <Button
            sx={{color:"white", fontSize: 20, fontWeight: "bold" }}
            onClick={() => {
              navigate("/" + username + "/HomePage")
            }}
          >
            Papa Eats
          </Button>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default AuthNavbar;
