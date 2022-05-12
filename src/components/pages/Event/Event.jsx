import React, { useCallback, useEffect, useState } from 'react';
import useCurrentPathname from '../../../hooks/useCurrentPath';
import useWebSocket from '../../../hooks/useWebSocket';
import { Container, StyledHeader, StyledEvent, EventWrapper, EventText } from './styles';

const Event = () => {
  const [eventData, setEventData] = useState({ type: '', data: [] });
  const { name, pathname } = useCurrentPathname();
  const socket = useWebSocket();

  const onMessage = useCallback(message => {
    const data = JSON.parse(message.data);
    setEventData(data);
  }, []);

  useEffect(() => {
    socket.addEventListener('message', onMessage);
    socket.send(JSON.stringify({ type: 'getLiveEvents', primaryMarkets: true }));

    return () => {
      socket.removeEventListener('message', onMessage);
    };
  }, [socket, onMessage, name]);

  return (
    <StyledEvent>
      <StyledHeader>{name}</StyledHeader>
      <Container>
        {eventData.data.length > 0 &&
          eventData.data.map(event => {
            return (
              event.className === name && (
                <EventWrapper key={event.eventId} to={`${pathname}/event/${event.eventId}`}>
                  <EventText>
                    {new Date(event.startTime)
                      .toLocaleTimeString()
                      .match(/\d{2}:\d{2}|[AMP]+/g)
                      .join(' ')}
                  </EventText>
                  <EventText>{event.name}</EventText>
                </EventWrapper>
              )
            );
          })}
      </Container>
    </StyledEvent>
  );
};

export default Event;
