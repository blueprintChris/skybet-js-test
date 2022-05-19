import React, { useEffect } from 'react';
import useWebSocket from '../../hooks/useWebSocket';
import { MessageTypes } from '../../static/types';
import { Market, StyledMarkets } from './styles';

const Markets = ({ marketId }) => {
  const { markets, socketSend } = useWebSocket();

  useEffect(() => {
    socketSend({ type: MessageTypes.GET_MARKET, id: marketId });
  }, [marketId, socketSend]);

  useEffect(() => {
    console.log(markets);
  }, [markets]);

  return (
    markets && (
      <StyledMarkets>
        <Market>Win</Market>
        <Market>Draw</Market>
        <Market>Loss</Market>
      </StyledMarkets>
    )
  );
};

export default Markets;
