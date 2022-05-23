import React from 'react';
import { StyledAccordion } from './styles';

const Accordion = ({ children }) => {
  return (
    <StyledAccordion>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child);
      })}
    </StyledAccordion>
  );
};

export default Accordion;
