import styled from 'styled-components';

import { StyledHeader } from '../Event/styles';

export const StyledEventDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EventHeader = styled(StyledHeader)`
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 2rem;

  span {
    font-size: 3rem;
    display: flex;
    flex: 1;
    justify-content: center;

    &:first-child {
      justify-content: flex-end;
    }

    &:last-child {
      justify-content: flex-start;
    }

    &:first-child,
    &:last-child {
      font-size: 2rem;
      margin: 0;
      flex-grow: 4;
    }
  }
`;

export const EventType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  background-color: #7e91c1;
  color: white;
  box-sizing: border-box;

  span {
    flex: 1;
    display: flex;
    justify-content: center;

    &:first-child {
      justify-content: flex-start;
    }

    &:last-child {
      justify-content: flex-end;
    }
  }
`;
