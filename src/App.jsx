import { Sidebar, Topbar } from './components';
import { SocketProvider } from './context/SocketContext';
import Routes from './routes';
import { ContentWrapper, StyledApp } from './styles';

function App() {
  return (
    <SocketProvider>
      <StyledApp>
        <Topbar />
        <ContentWrapper>
          <Sidebar />
          <Routes />
        </ContentWrapper>
      </StyledApp>
    </SocketProvider>
  );
}

export default App;
