import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

const useWebSocket = () => {
  const socket = useContext(SocketContext);

  return socket;
};

// const useWebSocket = (type, options) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const [webSocketReady, setWebSocketReady] = useState(false);
//   const [webSocket, setWebSocket] = useState(new WebSocket('ws://localhost:8889'));

//   // open the web socket
//   useEffect(() => {
//     webSocket.addEventListener('message', m => {
//       setData(JSON.parse(m.data));
//     });

//     webSocket.onopen = event => {
//       setWebSocketReady(true);
//     };

//     console.log('Websocket ready: ', webSocketReady);

//     webSocket.onclose = event => {
//       console.log('websocket closed');
//       setWebSocketReady(false);
//       setTimeout(() => {
//         setWebSocket(new WebSocket('ws://localhost:8889'));
//       }, 500);
//     };

//     webSocket.onerror = err => {
//       console.log(`WebSocket encountered an error: ${JSON.parse(err.message)}`);
//       setError(err);
//     };

//     if (webSocketReady) {
//       webSocket.send(JSON.stringify({ type, ...options }));
//     }

//     return () => {
//       console.log('Cleaning up...');
//       // webSocket.close();
//     };
//   }, [webSocketReady]);

//   return { data, error, webSocket };
// };

export default useWebSocket;
