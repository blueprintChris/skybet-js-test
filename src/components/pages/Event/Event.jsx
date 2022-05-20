import React, { useContext, useEffect } from 'react';
import useCurrentPathname from '../../../hooks/useCurrentPath';
import useWebSocket from '../../../hooks/useWebSocket';
import { Accordion } from '../..';
import { Container, StyledHeader, StyledEvent } from './styles';
import { MessageTypes } from '../../../static/types';
import { StoreContext } from '../../../context/StoreContext';

const Event = () => {
  const { name } = useCurrentPathname();
  const { socketSend } = useWebSocket();
  const { state } = useContext(StoreContext);
  const { events } = state;

  useEffect(() => {
    socketSend({ type: MessageTypes.GET_LIVE_EVENTS, primaryMarkets: true });
  }, [socketSend]);

  return (
    <StyledEvent>
      <StyledHeader>{name}</StyledHeader>
      <Container>{events && events.data && events.data.length > 0 && <Accordion data={events.data} />}</Container>
    </StyledEvent>
  );
};

export default Event;
