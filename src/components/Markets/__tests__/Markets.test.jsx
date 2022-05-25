import { render, screen } from '@testing-library/react';
import WebSocketMock from 'jest-websocket-mock';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { SocketProvider } from '../../../context/SocketContext';
import { StoreProvider } from '../../../context/StoreContext';
import Markets from '../Markets';
import { marketMock } from '../../../mocks/socketDataMock';

describe('Markets', () => {
  let webSocket;
  const URL = 'ws://localhost:8889';
  const history = createMemoryHistory();
  const markets = [marketMock.data.marketId];

  beforeEach(() => {
    webSocket = new WebSocketMock(URL);
  });

  afterEach(() => {
    WebSocketMock.clean();
  });

  const renderAppWithProviders = () => {
    return render(
      <SocketProvider>
        <StoreProvider>
          <Router location={history.location} navigator={history}>
            <Markets markets={markets} />
          </Router>
        </StoreProvider>
      </SocketProvider>
    );
  };

  it('should render without crashing', () => {
    renderAppWithProviders();
  });

  it('should render primary market name', async () => {
    renderAppWithProviders();

    await webSocket.connected;

    await expect(webSocket).toReceiveMessage(
      JSON.stringify({
        type: 'getMarket',
        id: markets[0],
      })
    );

    webSocket.send(JSON.stringify(marketMock));

    await screen.findByText(`Primary Market: ${marketMock.data.name}`);

    WebSocketMock.clean();
  });
});
