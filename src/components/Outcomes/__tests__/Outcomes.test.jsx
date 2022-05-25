import { render, screen } from '@testing-library/react';
import WebSocketMock from 'jest-websocket-mock';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { SocketProvider } from '../../../context/SocketContext';
import { StoreProvider } from '../../../context/StoreContext';
import Outcomes from '../Outcomes';
import { outcomeMock } from '../../../mocks/socketDataMock';

describe('Outcomes', () => {
  let webSocket;
  const URL = 'ws://localhost:8889';
  const history = createMemoryHistory();
  const outcomes = [outcomeMock.data.outcomeId];

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
            <Outcomes outcomes={outcomes} />
          </Router>
        </StoreProvider>
      </SocketProvider>
    );
  };

  it('should render without crashing', () => {
    renderAppWithProviders();
  });

  it('should show outcome data', async () => {
    renderAppWithProviders();

    await webSocket.connected;

    await expect(webSocket).toReceiveMessage(
      JSON.stringify({
        type: 'getOutcome',
        id: outcomes[0],
      })
    );

    webSocket.send(JSON.stringify(outcomeMock));

    await screen.findByText(outcomeMock.data.name);
    await screen.findByText(`${outcomeMock.data.price.num} / ${outcomeMock.data.price.den}`);
  });
});
