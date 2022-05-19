import React, { useEffect } from 'react';
import useCurrentPathname from '../../../hooks/useCurrentPath';
import useWebSocket from '../../../hooks/useWebSocket';
import { Accordion } from '../..';
import { Container, StyledHeader, StyledEvent } from './styles';
import { MessageTypes } from '../../../static/types';

const Event = () => {
  const { name } = useCurrentPathname();
  const { events, socketSend } = useWebSocket();

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
