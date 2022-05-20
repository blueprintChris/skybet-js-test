import React from 'react';
import Outcome from './Outcome/Outcome';
import { StyledOutcomes } from './styles';

const Outcomes = ({ outcomes }) => {
  return (
    <StyledOutcomes>
      {outcomes.map(outcomeId => (
        <Outcome id={outcomeId} key={outcomeId} />
      ))}
    </StyledOutcomes>
  );
};

export default Outcomes;
