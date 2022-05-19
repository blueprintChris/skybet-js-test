import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', 'sans-serif';

  hr {
    width: calc(100% - 2px);
    margin: 0;
  }
`;

export const EventLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #294999;
  height: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
