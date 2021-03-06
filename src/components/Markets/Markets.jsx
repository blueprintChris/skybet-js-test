import React from 'react';
import { Market } from '..';
import { StyledMarkets } from './styles';

const Markets = ({ markets }) => {
  return (
    <StyledMarkets>
      {markets.map(marketId => (
        <Market id={marketId} key={marketId} />
      ))}
    </StyledMarkets>
  );
};

export default Markets;
