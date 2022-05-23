import React from 'react';
import Market from './Market/Market';
import { StyledMarkets } from './styles';

const Markets = ({ markets }) => {
  console.log('markets: ', markets);
  return (
    <StyledMarkets>
      {markets.map(marketId => (
        <Market id={marketId} key={marketId} />
      ))}
    </StyledMarkets>
  );
};

export default Markets;
