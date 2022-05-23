import { Sidebar, Topbar } from '../';
import { SocketProvider } from '../../context/SocketContext';
import { StoreProvider } from '../../context/StoreContext';
import GlobalStyle from '../../globalStyles';
import Routes from '../../routes';
import { ContentWrapper, StyledApp } from './styles';

function App() {
  return (
    <StoreProvider>
      <SocketProvider>
        <GlobalStyle />
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
