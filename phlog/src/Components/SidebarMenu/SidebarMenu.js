import React from 'react';
import Button from "@mui/material/Button";

import { StyledSidebarMenu } from './SidebarMenu.styled';
import { bool } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SidebarMenu = ({ inBar, username }) => {
  const navigate = useNavigate();

  return (
    <StyledSidebarMenu inBar={inBar}>
      <Button
            sx={{color:"white", fontSize: 15, fontWeight: "bold", text: "left"}}

            onClick={() => {
              navigate("/" + username + "/HomePage")
            }}
          >
            Cuisines
      </Button>
      
      <Button
            sx={{color:"white", fontSize: 15, fontWeight: "bold", text: "left"}}

            onClick={() => {
              if(username === ":GUEST:")
                navigate("/" + username + "/Guest")
              else
                navigate("/" + username + "/User")
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
