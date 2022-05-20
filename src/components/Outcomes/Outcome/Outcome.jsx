import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../../context/StoreContext';
import useWebSocket from '../../../hooks/useWebSocket';
import { MessageTypes } from '../../../static/types';
import { StyledOutcome } from './styles';

const Outcome = ({ id }) => {
  const { socketSend } = useWebSocket();
  const { state } = useContext(StoreContext);
  const { outcomes, isDecimalOdds } = state;

  useEffect(() => {
    socketSend({ type: MessageTypes.GET_OUTCOME, id });
  }, [id, socketSend]);

  return (
    outcomes[id] && (
      <StyledOutcome>
        <span>{outcomes[id].name}</span>
        <span>&nbsp;-&nbsp;</span>
        <span>
          <strong> {isDecimalOdds ? parseFloat(outcomes[id].price.decimal).toFixed(2) : `${outcomes[id].price.num} / ${outcomes[id].price.den}`}</strong>
        </span>
      </StyledOutcome>
    )
  );
};

export default Outcome;