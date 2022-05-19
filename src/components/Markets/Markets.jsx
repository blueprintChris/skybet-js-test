import React, { useEffect, useState } from 'react';
import useWebSocket from '../../hooks/useWebSocket';
import Types from '../../static/types';
import { Market, StyledMarkets } from './styles';

const Markets = ({ marketId }) => {
  const [marketData, setMarketData] = useState({});
  const { data, socket } = useWebSocket();

  console.log(marketId);
  useEffect(() => {
    socket.send(JSON.stringify({ type: 'getMarket', id: marketId }));
  }, [marketId, socket]);

  useEffect(() => {
    if (data.type === Types.MARKET_DATA) {
      setMarketData(data);
    }
  }, [data]);

  return (
    marketData && (
      <StyledMarkets>
        <Market>Win</Market>
        <Market>Draw</Market>
        <Market>Loss</Market>
      </StyledMarkets>
    )
  );
};

export default Markets;
