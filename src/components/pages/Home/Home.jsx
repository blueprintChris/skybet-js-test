import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../../context/StoreContext';
import Actions from '../../../static/actions';
import { Container, StyledHeader } from '../Event/styles';
import { StyledHome } from './styles';

const Home = () => {
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    dispatch({ type: Actions.RESET_STATE });
  }, [dispatch]);

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
