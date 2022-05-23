import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import Markets from '../../Markets/Markets';
import { AccordionContent, AccordionHeader, AccordionText, RotatingChevron } from './styles';

const AccordionItem = ({ item, children, markets }) => {
  const [contentHeight, setContentHeight] = useState('0px');
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <>
      <AccordionHeader key={item.eventId} onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <AccordionText>{children}</AccordionText>
        <RotatingChevron isActive={isOpen}>
          <FaAngleDoubleDown />
        </RotatingChevron>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen} ref={contentRef} contentHeight={contentHeight}>
        <Markets markets={markets} />
      </AccordionContent>
      <hr />
    </>
  );
};

export default AccordionItem;
