import { useCallback, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { StoreContext } from '../context/StoreContext';
import { handleOnMessage, handleSendMessage } from '../handlers/socketHandler';
import Actions from '../static/actions';

const useWebSocket = () => {
  const { dispatch } = useContext(StoreContext);
  const socket = useContext(SocketContext);

  const socketSend = useCallback((...args) => handleSendMessage(socket, socketSend, ...args), [socket]);
  const onMessage = useCallback(message => handleOnMessage(message, dispatch), [dispatch]);

  useEffect(() => {
    socket.onmessage = message => onMessage(message);
  }, [onMessage, socket]);

  useEffect(() => {
    socket.onerror = err => dispatch({ type: Actions.ERROR, err });
  }, [dispatch, socket]);

  return { socket, socketSend };
};

export default useWebSocket;
