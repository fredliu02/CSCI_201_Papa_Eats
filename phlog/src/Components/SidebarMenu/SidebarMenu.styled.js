import styled from 'styled-components';
export { default } from './SidebarMenu';

export const StyledSidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  height: 90px;
  width: 130px;
  text-align: left;
  padding: 1.6rem;
  position: absolute;
  top: 46px;
  left: 0;
  border-bottom-right-radius:10px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ inBar }) => inBar ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;