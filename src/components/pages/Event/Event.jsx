import React, { useContext, useEffect } from 'react';
import useCurrentPathname from '../../../hooks/useCurrentPath';
import useWebSocket from '../../../hooks/useWebSocket';
import { Accordion } from '../..';
import { Container, StyledHeader, StyledEvent } from './styles';
import { MessageTypes } from '../../../static/types';
import { StoreContext } from '../../../context/StoreContext';
import Markets from '../../Markets/Markets';
import Market from '../../Markets/Market/Market';
import AccordionItem from '../../Accordion/AccordionItem/AccordionItem';
import { showFriendlyTime } from '../../../helpers/dateTimeHelper';
import { useLocation } from 'react-router-dom';

const Event = () => {
  const { pathname } = useLocation();
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
      <Container>
        {events.data && events.data.length > 0 && (
          <Accordion>
            {events.data.map(event => (
              <AccordionItem
                item={event}
                text={[showFriendlyTime(event.startTime), event.name]}
                to={`${pathname}/event/${event.eventId}`}
                key={event.eventId}
                isLink
              >
                <Markets markets={event.markets} />
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </Container>
    </StyledEvent>
  );
};

export default Event;
