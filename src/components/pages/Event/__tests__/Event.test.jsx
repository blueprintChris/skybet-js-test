import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import WebSocketMock from 'jest-websocket-mock';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Event from '../Event';
import { SocketProvider } from '../../../../context/SocketContext';
import { StoreProvider } from '../../../../context/StoreContext';
import { eventMock } from '../../../../mocks/socketDataMock';
import { showFriendlyTime } from '../../../../helpers/dateTimeHelper';

describe('Event', () => {
  const URL = 'ws://localhost:8889';
  const webSocket = new WebSocketMock(URL);
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

  it('should render without crashing', () => {
    renderAppWithProviders();
  });

  it('should show the event name in the header', () => {
    renderAppWithProviders();

    screen.getByText('Football');
  });

  it('should show names and times of live football events', async () => {
    renderAppWithProviders();

    act(() => {
      expect(webSocket).toReceiveMessage(
        JSON.stringify({
          type: 'getLiveEvents',
          primaryMarkets: true,
        })
      );
    });

    webSocket.send(eventMock);
    await screen.findByText(eventMock.name);
    await screen.findByText(showFriendlyTime(eventMock.startTime));

    WebSocketMock.clean();
  });
});
