import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../../context/StoreContext';
import Actions from '../../../static/actions';
import { StyledError, StyledHeader, StyledIcon } from './styles';

const Error = () => {
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    dispatch({ type: Actions.CLEAR_ERROR });
  }, [dispatch]);

  return (
    <StyledError>
      <StyledHeader>Whoops!</StyledHeader>
      <StyledIcon />
      <span>Looks like there was an error. Please go back and try again.</span>
    </StyledError>
  );
};

export default Error;
