import React from 'react';
import { useLocation } from 'react-router-dom';
import AccordionItem from './AccordionItem/AccordionItem';
import { EventLink, StyledAccordion } from './styles';

const Accordion = ({ data }) => {
  const { pathname } = useLocation();

  return (
    <StyledAccordion>
      {data.map(item => (
        <AccordionItem item={item} key={item.eventId} marketId={item.markets[0]}>
          <span>
            {new Date(item.startTime)
              .toLocaleTimeString()
              .match(/\d{2}:\d{2}|[AMP]+/g)
              .join(' ')}
          </span>
          <EventLink to={`${pathname}/event/${item.eventId}`}>{item.name}</EventLink>
        </AccordionItem>
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
