import React from 'react';
import { FaHome, FaFutbol, FaBasketballBall, FaLemon, FaTableTennis } from 'react-icons/fa';
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
      <StyledLink to='/netball'>
        <FaBasketballBall /> <LinkText>Netball</LinkText>
      </StyledLink>
      <StyledLink to='/rugby'>
        <FaLemon /> <LinkText>Rugby</LinkText>
      </StyledLink>
      <StyledLink to='/table-tennis'>
        <FaTableTennis /> <LinkText>Table Tennis</LinkText>
      </StyledLink>
    </StyledSidebar>
  );
};

export default Sidebar;
