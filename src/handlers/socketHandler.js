import Actions from '../static/actions';
import { ResponseTypes } from '../static/types';

export const handleOnMessage = (message, dispatch) => {
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

  if (socketData.type === ResponseTypes.EVENT_DATA) {
    dispatch({ type: Actions.EVENT_DATA, payload: { ...socketData } });
  }
};

export const handleSendMessage = (socket, socketSend, ...args) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(...args));
  } else {
    setTimeout(() => {
      socketSend(...args);
    }, 5);
  }
};
