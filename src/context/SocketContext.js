import { createContext, useEffect, useState } from 'react';

const ws = new WebSocket('ws://localhost:8889');

export const SocketContext = createContext(ws);

export const SocketProvider = props => {
  const [webSocket, setWebSocket] = useState(ws);

  useEffect(() => {
    const handleSocketClose = () => {
      setTimeout(() => {
        setWebSocket(new WebSocket('ws://localhost:8889'));
      }, 5);
    };

    webSocket.addEventListener('close', handleSocketClose);

    return () => {
      webSocket.removeEventListener('close', handleSocketClose);
    };
  }, [webSocket]);

  return <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>;
};
