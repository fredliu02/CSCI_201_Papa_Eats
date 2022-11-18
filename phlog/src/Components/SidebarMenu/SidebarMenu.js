import React from 'react';
import Button from "@mui/material/Button";

import { StyledSidebarMenu } from './SidebarMenu.styled';
import { bool } from 'prop-types';

const SidebarMenu = ({ inBar }) => {
  return (
    <StyledSidebarMenu inBar={inBar}>
      <Button
            sx={{color:"white", fontSize: 15, fontWeight: "bold", text: "left"}}

            onClick={() => {
              window.location.replace("/Cuisines");
            }}
          >
            Cuisines
      </Button>
      
      <Button
            sx={{color:"white", fontSize: 15, fontWeight: "bold", text: "left"}}

            onClick={() => {
              window.location.replace("/User/TestUser");
            }}
          >
            Users
      </Button>

    </StyledSidebarMenu>
  )
}

SidebarMenu.propTypes = {
    inBar: bool.isRequired,
}

export default SidebarMenu;
