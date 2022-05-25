import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import WebSocketMock from 'jest-websocket-mock';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { SocketProvider } from '../../../context/SocketContext';
import { StoreProvider } from '../../../context/StoreContext';
import App from '../App';
import { eventMock, marketMock, outcomeMock } from '../../../mocks/socketDataMock';

describe('App', () => {
  let webSocket;
  const URL = 'ws://localhost:8889';
  const history = createMemoryHistory();

  const renderAppWithProviders = () => {
    return render(
      <SocketProvider>
        <StoreProvider>
          <Router location={history.location} navigator={history}>
            <App />
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

  it('should render app without crashing', () => {
    renderAppWithProviders();
  });

  it('should render the the homepage', () => {
    renderAppWithProviders();

    screen.getByText('Home Page');
    screen.getByText('This is an example of a page that does not consume the WebSocket.');
    screen.getByText('👈 Please select Football on the left to view live Football data');
  });

  it('should render the sidebar', () => {
    renderAppWithProviders();

    screen.getByText('Home');
    screen.getByText('Football');
  });

  it('should render the topbar', () => {
    renderAppWithProviders();

    screen.getByText('Decimal odds: OFF');
    screen.getByRole('img', { src: '/images/sky-bet-logo-svg.svg' });
  });

  it('should navigate to show /football on click of football navlink', () => {
    renderAppWithProviders();

    expect(history.location.pathname).toBe('/');

    const footballLink = screen.getByRole('link', { name: 'Football' });
    userEvent.click(footballLink);

    expect(history.location.pathname).toBe('/football');
  });

  it('should navigate to /football, fetch event data and change odds type on toggle', async () => {
    renderAppWithProviders();

    await webSocket.connected;

    const footballLink = screen.getByRole('link', { name: 'Football' });
    userEvent.click(footballLink);

    await act(async () => {
      await expect(webSocket).toReceiveMessage(
        JSON.stringify({
          type: 'getLiveEvents',
          primaryMarkets: true,
        })
      );
    });

    webSocket.send(JSON.stringify(eventMock));
    webSocket.send(JSON.stringify(marketMock));
    webSocket.send(JSON.stringify(outcomeMock));

    await screen.findByText('9 / 1');

    const toggleSwitch = screen.getByTestId('odds-switch');
    userEvent.click(toggleSwitch);

    await screen.findByText('10.00');
  });
});
