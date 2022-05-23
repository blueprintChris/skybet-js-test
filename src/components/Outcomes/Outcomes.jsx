import React from 'react';
import Outcome from './Outcome/Outcome';
import { StyledOutcomes, StyledTable, TableBody, TableHead, TableHeader, TableRow } from './styles';

const Outcomes = ({ outcomes }) => {
  return (
    <StyledOutcomes>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableHeader>Outcome</TableHeader>
            <TableHeader>Odds</TableHeader>
          </TableRow>
        </TableHead>
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
