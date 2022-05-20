import { Sidebar, Topbar } from './components';
import { SocketProvider } from './context/SocketContext';
import { StoreProvider } from './context/StoreContext';
import Routes from './routes';
import { ContentWrapper, StyledApp } from './styles';

function App() {
  return (
    <StoreProvider>
      <SocketProvider>
        <StyledApp>
          <Topbar />
          <ContentWrapper>
            <Sidebar />
            <Routes />
          </ContentWrapper>
        </StyledApp>
      </SocketProvider>
    </StoreProvider>
  );
}

export default App;
