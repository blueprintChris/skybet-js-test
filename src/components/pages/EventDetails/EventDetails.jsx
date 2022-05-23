import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext';
import { showFriendlyTime } from '../../../helpers/dateTimeHelper';
import useWebSocket from '../../../hooks/useWebSocket';
import { MessageTypes } from '../../../static/types';
import Accordion from '../../Accordion/Accordion';
import AccordionItem from '../../Accordion/AccordionItem/AccordionItem';
import Outcomes from '../../Outcomes/Outcomes';
import { Container } from '../Event/styles';

import { StyledEventDetails, EventHeader, EventType } from './styles';

const EventDetails = () => {
  const { id } = useParams();
  const { socketSend } = useWebSocket();
  const { state } = useContext(StoreContext);
  const { selectedEvent, markets } = state;

  useEffect(() => {
    socketSend({ type: MessageTypes.GET_EVENT, id: Number(id) });
  }, [id, socketSend]);

  useEffect(() => {
    if (selectedEvent.data) {
      selectedEvent.data.markets.forEach(market => {
        socketSend({ type: MessageTypes.GET_MARKET, id: market });
      });
    }
  }, [selectedEvent.data, socketSend]);

  return (
    selectedEvent.data && (
      <StyledEventDetails>
        <EventHeader>
          <span>{selectedEvent.data.competitors[0].name}</span>
          <span>
            {selectedEvent.data.scores.home} - {selectedEvent.data.scores.away}
          </span>
          <span>{selectedEvent.data.competitors[1].name}</span>
        </EventHeader>
        <EventType>
          <span>{selectedEvent.data.typeName}</span>
          <span>{selectedEvent.data.linkedEventTypeName || 'Friendly'}</span>
          <span>Started:&nbsp;{showFriendlyTime(selectedEvent.data.startTime)}</span>
        </EventType>
        <Container>
          <Accordion>
            {selectedEvent.data.markets.map(market => (
              <AccordionItem text={[markets[market] && selectedEvent.data.eventId === markets[market].eventId && markets[market].name]} key={market}>
                {markets[market] && <Outcomes outcomes={markets[market].outcomes} />}
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </StyledEventDetails>
    )
  );
};

export default EventDetails;
