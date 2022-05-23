import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../../context/StoreContext';
import { useWebSocket } from '../../../hooks';
import { MessageTypes } from '../../../static/types';
import { Outcomes } from '../../';
import { StyledMarket } from './styles';

const Market = ({ id }) => {
  const { socketSend } = useWebSocket();
  const { state } = useContext(StoreContext);
  const { markets } = state;

  useEffect(() => {
    socketSend({ type: MessageTypes.GET_MARKET, id });
  }, [id, socketSend]);

  return (
    markets[id] && (
      <>
        <StyledMarket>Primary Market: {markets[id].name}</StyledMarket>
        <Outcomes outcomes={markets[id].outcomes} />
      </>
    )
  );
};

export default Market;
