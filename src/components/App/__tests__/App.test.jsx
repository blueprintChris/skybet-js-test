import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import WebSocketMock from 'jest-websocket-mock';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';
import { SocketProvider } from '../../../context/SocketContext';
import { StoreProvider } from '../../../context/StoreContext';

describe('App', () => {
  const URL = 'ws://localhost:8889';
  const webSocket = new WebSocketMock(URL);
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

  it('should change odds type when clicking toggle switch', () => {});

  it('should navigate to show /football on click of football navlink', () => {
    renderAppWithProviders();

    expect(history.location.pathname).toBe('/');

    const footballLink = screen.getByRole('link', { name: 'Football' });
    userEvent.click(footballLink);

    expect(history.location.pathname).toBe('/football');
  });

  it('should make getLiveEvents call to WebSocket on navigation to /football', () => {
    renderAppWithProviders();

    const footballLink = screen.getByRole('link', { name: 'Football' });
    userEvent.click(footballLink);

    act(async () => {
      await expect(webSocket).toReceiveMessage(
        JSON.stringify({
          type: 'getLiveEvents',
          primaryMarkets: true,
        })
      );
    });
  });
});
