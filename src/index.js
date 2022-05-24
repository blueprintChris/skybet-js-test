import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components';
import { SocketProvider } from './context/SocketContext';
import { StoreProvider } from './context/StoreContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SocketProvider>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </SocketProvider>
);

reportWebVitals();
