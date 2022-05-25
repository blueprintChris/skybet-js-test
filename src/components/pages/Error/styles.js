import styled from 'styled-components';
import { FaRegSadTear } from 'react-icons/fa';

export const StyledError = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: black;
    font-weight: 600;
  }
`;

export const StyledIcon = styled(FaRegSadTear)`
  width: 100%;
  height: 15rem;
  margin-bottom: 2rem;
`;

export const StyledHeader = styled.h1`
  margin: 0 0 2rem 0;
  font-size: 5rem;
`;
