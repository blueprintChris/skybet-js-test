import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { EventLink } from '../styles';
import { AccordionContent, AccordionHeader, AccordionText, RotatingChevron, StyledAccordionItem } from './styles';

const AccordionItem = ({ children, isLink, textValues, to }) => {
  const [contentHeight, setContentHeight] = useState('0px');
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <StyledAccordionItem>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <AccordionText>
          {textValues.length > 0 &&
            textValues.map((txt, index) =>
              !isLink ? (
                <span key={index}>{txt}</span>
              ) : (
                <EventLink key={index} to={to}>
                  <span>{txt}</span>
                </EventLink>
              )
            )}
        </AccordionText>
        <RotatingChevron isActive={isOpen}>
          <FaAngleDoubleDown />
        </RotatingChevron>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen} ref={contentRef} contentHeight={contentHeight}>
        {children}
      </AccordionContent>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
