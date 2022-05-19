import React, { useEffect, useState } from 'react';
import useCurrentPathname from '../../../hooks/useCurrentPath';
import useWebSocket from '../../../hooks/useWebSocket';
import { Accordion } from '../..';
import { Container, StyledHeader, StyledEvent } from './styles';
import Types from '../../../static/types';

const Event = () => {
  const [eventData, setEventData] = useState({});
  const { name } = useCurrentPathname();
  const { data, socket } = useWebSocket();

  useEffect(() => {
    socket.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: true }));
  }, [socket]);

  useEffect(() => {
    if (data.type === Types.LIVE_EVENTS_DATA) {
      setEventData(data);
    }
  }, [data]);

  return (
    <StyledEvent>
      <StyledHeader>{name}</StyledHeader>
      <Container>{eventData && eventData.data && eventData.data.length > 0 && <Accordion data={eventData.data} />}</Container>
    </StyledEvent>
  );
};

export default Event;
