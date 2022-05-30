import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext';
import { useCurrentPath, useWebSocket } from '../../../hooks';
import { Accordion, AccordionItem, Markets } from '../..';
import { showFriendlyTime } from '../../../helpers/dateTimeHelper';
import { MessageTypes } from '../../../static/types';
import { Container, StyledHeader, StyledEvent } from './styles';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const Event = () => {
  const { pathname } = useLocation();
  const { name } = useCurrentPath();
  const { socketSend } = useWebSocket();
  const { state } = useContext(StoreContext);
  const { events } = state;

  useEffect(() => {
    socketSend({ type: MessageTypes.GET_LIVE_EVENTS, primaryMarkets: true });
  }, [socketSend]);

  // if (!events.data) {
  //   return <LoadingSpinner />;
  // }

  return (
    <StyledEvent>
      <StyledHeader>{name}</StyledHeader>
      <Container>
        {events.data ? (
          events.data.length > 0 && (
            <Accordion>
              {events.data.map(event => (
                <AccordionItem
                  item={event}
                  textValues={[showFriendlyTime(event.startTime), event.name]}
                  to={`${pathname}/event/${event.eventId}`}
                  key={event.eventId}
                  isLink
                >
                  <Markets markets={event.markets} />
                </AccordionItem>
              ))}
            </Accordion>
          )
        ) : (
          <LoadingSpinner />
        )}
      </Container>
    </StyledEvent>
  );
};

export default Event;
