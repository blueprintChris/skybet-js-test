import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledEvent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledHeader = styled.h1`
  display: flex;
  background-color: #294999;
  padding: 2rem;
  margin: 0;
  color: white;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 100%;
  overflow-y: auto;
`;

export const EventWrapper = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  background-color: white;
  text-decoration: none;
  font-weight: 600;
  color: black;
  width: 100%;
  font-family: 'Roboto', 'sans-serif';
  border-bottom: 1px solid grey;
  cursor: pointer;
`;

export const EventText = styled.span`
  margin-right: 2rem;
`;
