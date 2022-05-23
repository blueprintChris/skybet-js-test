import styled from 'styled-components';

export const StyledOutcome = styled.tr`
  background-color: rgba(212, 218, 234, 0.5);

  &:nth-child(even) {
    background-color: rgba(233, 236, 244, 0.5);
  }
`;

export const TableData = styled.td`
  padding: 0.8rem;
  border: 1px solid rgb(190, 190, 190);
  text-align: center;
  font-weight: 600;
`;
