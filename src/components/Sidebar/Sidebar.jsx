import React from 'react';
import { FaHome, FaFutbol } from 'react-icons/fa';
import { LinkText, StyledLink, StyledSidebar } from './styles';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledLink to='/'>
        <FaHome /> <LinkText>Home</LinkText>
      </StyledLink>
      <StyledLink to='/football'>
        <FaFutbol /> <LinkText>Football</LinkText>
      </StyledLink>
    </StyledSidebar>
  );
};

export default Sidebar;
