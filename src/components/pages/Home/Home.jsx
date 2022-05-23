import React from 'react';
import { Container, StyledHeader } from '../Event/styles';
import { StyledHome } from './styles';

const Home = () => {
  return (
    <StyledHome>
      <StyledHeader>Home Page</StyledHeader>
      <Container>
        <h2>This is an example of a page that does not consume the WebSocket.</h2>
        <p>👈 Please select Football on the left to view live Football data</p>
      </Container>
    </StyledHome>
  );
};

export default Home;
