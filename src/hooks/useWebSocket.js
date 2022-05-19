import { useCallback, useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

const useWebSocket = (type, options) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const socket = useContext(SocketContext);

  const onMessage = useCallback(message => {
    const data = JSON.parse(message.data);

    setData(data);
  }, []);

  useEffect(() => {
    socket.addEventListener('message', onMessage);

    socket.onerror = err => setError(err);

    return () => {
      socket.removeEventListener('message', onMessage);
    };
  }, [onMessage, socket]);

  return { socket, data, error };
};

export default useWebSocket;
