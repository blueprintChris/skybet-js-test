import styled from 'styled-components';

export const StyledOutcome = styled.tr`
  background-color: rgba(212, 218, 234, 0.5);

  &:nth-child(even) {
    background-color: rgba(233, 236, 244, 0.5);
  }
`;

export const TableData = styled.td`
  padding: 1rem;
  font-size: 1.2rem;

  &:last-child {
    text-align: center;
    font-weight: 600;
    color: red;
  }
`;
