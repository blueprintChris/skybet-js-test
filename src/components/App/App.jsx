import { Sidebar, Topbar } from '../';
import Routes from '../../routes';
import GlobalStyle from '../../globalStyles';
import { ContentWrapper, StyledApp } from './styles';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';

function App() {
  const navigate = useNavigate();
  const { state } = useContext(StoreContext);
  const { error } = state;

  useEffect(() => {
    if (error) {
      navigate('/error');
    }
  }, [error, navigate]);

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
