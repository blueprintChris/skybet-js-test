import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 24rem;
  min-width: 24rem;
  background-color: #132c6c;
  min-height: calc(100vh - 6rem);
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: white;
  padding: 1.2rem 1.6rem;
  box-sizing: border-box;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: white;
    color: #132c6c;
  }

  &[aria-current] {
    background-color: white;
    color: #132c6c;
  }
`;

export const LinkText = styled.span`
  margin-left: 1rem;
`;
