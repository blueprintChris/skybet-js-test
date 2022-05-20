import { useCallback, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { StoreContext } from '../context/StoreContext';
import Actions from '../static/actions';
import { ResponseTypes } from '../static/types';

const useWebSocket = () => {
  const { dispatch } = useContext(StoreContext);
  const socket = useContext(SocketContext);

  const socketSend = useCallback(
    (...args) => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(...args));
      } else {
        setTimeout(() => {
          socketSend(...args);
        }, 5);
      }
    },
    [socket]
  );

  const onMessage = useCallback(
    message => {
      const socketData = JSON.parse(message.data);

      if (socketData.type === ResponseTypes.LIVE_EVENTS_DATA) {
        dispatch({ type: Actions.LIVE_EVENTS_DATA, payload: { ...socketData } });
      }

      if (socketData.type === ResponseTypes.MARKET_DATA) {
        dispatch({
          type: Actions.MARKET_DATA,
          payload: {
            [socketData.data.marketId]: socketData.data,
          },
        });
      }

      if (socketData.type === ResponseTypes.OUTCOME_DATA) {
        dispatch({
          type: Actions.OUTCOME_DATA,
          payload: {
            [socketData.data.outcomeId]: socketData.data,
          },
        });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    socket.onmessage = message => onMessage(message);
  }, [onMessage, socket]);

  useEffect(() => {
    socket.onerror = err => dispatch({ type: Actions.ERROR, err });
  }, [dispatch, socket]);

  return { socket, socketSend };
};

export default useWebSocket;
