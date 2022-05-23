import React from 'react';
import { Outcome } from '..';
import { StyledOutcomes, StyledTable, TableBody } from './styles';

const Outcomes = ({ outcomes }) => {
  return (
    <StyledOutcomes>
      <StyledTable>
        <TableBody>
          {outcomes.map(outcomeId => (
            <Outcome id={outcomeId} key={outcomeId} />
          ))}
        </TableBody>
      </StyledTable>
    </StyledOutcomes>
  );
};

export default Outcomes;
