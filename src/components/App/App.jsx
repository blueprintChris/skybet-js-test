import { Sidebar, Topbar } from '../';
import Routes from '../../routes';
import GlobalStyle from '../../globalStyles';
import { ContentWrapper, StyledApp } from './styles';

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Topbar />
      <ContentWrapper>
        <Sidebar />
        <Routes />
      </ContentWrapper>
    </StyledApp>
  );
}

export default App;
