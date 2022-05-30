import { render, screen } from '@testing-library/react';
import WebSocketMock from 'jest-websocket-mock';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { SocketProvider } from '../../../../context/SocketContext';
import { StoreProvider } from '../../../../context/StoreContext';
import Event from '../Event';
import { showFriendlyTime } from '../../../../helpers/dateTimeHelper';
import { eventMock } from '../../../../mocks/socketDataMock';

describe('Event', () => {
  let webSocket;
  const URL = 'ws://localhost:8889';
  const history = createMemoryHistory({ initialEntries: ['/football'] });

  const renderAppWithProviders = () => {
    return render(
      <SocketProvider>
        <StoreProvider>
          <Router location={history.location} navigator={history}>
            <Event />
          </Router>
        </StoreProvider>
      </SocketProvider>
    );
  };

  beforeEach(() => {
    webSocket = new WebSocketMock(URL);
  });

  afterEach(() => {
    WebSocketMock.clean();
  });

  it('should render without crashing', () => {
    renderAppWithProviders();
  });

  it('should show the event name in the header', async () => {
    renderAppWithProviders();

    screen.getByText('Football');
  });

  it('should show names and times of live football events', async () => {
    renderAppWithProviders(webSocket);

    await webSocket.connected;

    await expect(webSocket).toReceiveMessage(
      JSON.stringify({
        type: 'getLiveEvents',
        primaryMarkets: true,
      })
    );

    webSocket.send(JSON.stringify(eventMock));

    await screen.findByText(eventMock.data[0].name);
    await screen.findByText(showFriendlyTime(eventMock.data[0].startTime));
  });
});
