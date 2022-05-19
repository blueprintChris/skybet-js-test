import styled from 'styled-components';

export const StyledMarkets = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, rgba(41, 73, 153, 0.2) 100%);
`;

export const Market = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-right: 1px grey solid;
  font-weight: 600;

  &:last-child {
    border: none;
  }
`;
