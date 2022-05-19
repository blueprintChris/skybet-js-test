import styled from 'styled-components';

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: white;
  text-decoration: none;
  font-weight: 600;
  color: black;
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  height: ${({ isOpen, contentHeight }) => (isOpen ? contentHeight : '0')};
  overflow: hidden;
  transition: height 0.4s ease-in-out;
`;

export const RotatingChevron = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : '0')};
`;
