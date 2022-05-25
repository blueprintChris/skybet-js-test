import { render, screen } from '@testing-library/react';
import WebSocketMock from 'jest-websocket-mock';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { SocketProvider } from '../../../../context/SocketContext';
import { StoreProvider } from '../../../../context/StoreContext';
import EventDetails from '../EventDetails';
import { marketMock, singleEventMock } from '../../../../mocks/socketDataMock';
import { showFriendlyTime } from '../../../../helpers/dateTimeHelper';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '21249939',
  }),
}));

describe('EventDetails', () => {
  let webSocket;
  const URL = 'ws://localhost:8889';
  const history = createMemoryHistory({ initialEntries: ['/football/event/21249939'] });

  const renderAppWithProviders = () => {
    return render(
      <SocketProvider>
        <StoreProvider>
          <Router location={history.location} navigator={history}>
            <EventDetails />
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

  it('should show event and market data', async () => {
    renderAppWithProviders();

    await webSocket.connected;

    await expect(webSocket).toReceiveMessage(
      JSON.stringify({
        type: 'getEvent',
        id: 21249939,
      })
    );

    webSocket.send(JSON.stringify(singleEventMock));

    await screen.findByText(singleEventMock.data.competitors[0].name);
    await screen.findByText(singleEventMock.data.competitors[1].name);
    await screen.findByText(`${singleEventMock.data.scores.home} - ${singleEventMock.data.scores.away}`);
    await screen.findByText(singleEventMock.data.typeName);
    await screen.findByText(singleEventMock.data.linkedEventTypeName);
    await screen.findByText(`Started: ${showFriendlyTime(singleEventMock.data.startTime)}`);

    for (const market of singleEventMock.data.markets) {
      await expect(webSocket).toReceiveMessage(
        JSON.stringify({
          type: 'getMarket',
          id: market,
        })
      );
      webSocket.send(JSON.stringify(marketMock));
    }

    await screen.findByText(marketMock.data.name);
  });
});
