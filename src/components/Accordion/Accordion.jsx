import React from 'react';
import { useLocation } from 'react-router-dom';
import AccordionItem from './AccordionItem/AccordionItem';
import { EventLink, EventTime, StyledAccordion } from './styles';

const Accordion = ({ data }) => {
  const { pathname } = useLocation();

  return (
    <StyledAccordion>
      {data.map(item => (
        <AccordionItem item={item} key={item.eventId} markets={item.markets}>
          <EventTime>
            {new Date(item.startTime)
              .toLocaleTimeString()
              .match(/\d{2}:\d{2}|[AMP]+/g)
              .join(' ')}
          </EventTime>
          <EventLink to={`${pathname}/event/${item.eventId}`}>{item.name}</EventLink>
        </AccordionItem>
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
