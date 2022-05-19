import { useCallback, useContext, useEffect, useReducer } from 'react';
import { SocketContext } from '../context/SocketContext';
import reducer from '../reducers/reducer';
import Actions from '../static/actions';
import initialState from '../static/initialState';
import { ResponseTypes } from '../static/types';

const useWebSocket = () => {
  const [{ events, markets, error }, dispatch] = useReducer(reducer, initialState);
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

  const onMessage = useCallback(message => {
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
  }, []);

  useEffect(() => {
    socket.onmessage = message => onMessage(message);
  }, [onMessage, socket]);

  useEffect(() => {
    socket.onerror = err => dispatch({ type: Actions.ERROR, err });
  }, [socket]);

  return { socket, events, markets, error, socketSend };
};

export default useWebSocket;
