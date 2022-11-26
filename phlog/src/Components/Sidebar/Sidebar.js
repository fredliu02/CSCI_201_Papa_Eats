import React from 'react';
import { StyledSidebar } from './Sidebar.styled';
import { bool, func } from 'prop-types';

const Sidebar = ({ inBar, openBar}) => {
  return (
    <StyledSidebar inBar={inBar} onClick={() => openBar(!inBar)}>
      <div />
      <div />
      <div />
    </StyledSidebar>
  )
}

Sidebar.propTypes = {
  inBar: bool.isRequired,
  openBar: func.isRequired,
};

export default Sidebar;
