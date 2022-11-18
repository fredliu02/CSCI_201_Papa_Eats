import styled from 'styled-components';

export const StyledSidebar = styled.button`
  position: absolute;
  top: 11px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 15px;
  height: 1.6rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 1.5rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
}
`;
