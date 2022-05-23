import styled from 'styled-components';

export const StyledAccordionItem = styled.div`
  margin-bottom: 1rem;
  border-radius: 5px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 0 2rem;
  color: black;
  cursor: pointer;
  border-radius: ${props => (props.isOpen ? '5px 5px 0 0' : '5px')};
  background: ${props => (props.isOpen ? '#132C6C' : '#E0E8F3')};
  color: ${props => (props.isOpen ? 'white' : 'black')};

  a {
    color: ${props => (props.isOpen ? 'white' : '#294999')};
  }
`;

export const AccordionText = styled.div`
  display: flex;
`;

export const AccordionContent = styled.div`
  height: ${({ isOpen, contentHeight }) => (isOpen ? contentHeight : '0')};
  overflow: hidden;
  transition: height 0.4s ease-in-out;
  border-radius: 0 0 5px 5px;
`;

export const RotatingChevron = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : '0')};
`;
