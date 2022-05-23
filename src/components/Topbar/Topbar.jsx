import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { ToggleSwitch } from '..';
import Actions from '../../static/actions';
import { Logo, StyledTopbar } from './styles';

const Topbar = () => {
  const { dispatch } = useContext(StoreContext);

  const toggleOdds = () => {
    dispatch({ type: Actions.TOGGLE_ODDS });
  };

  return (
    <StyledTopbar>
      <Logo src='/images/sky-bet-logo-svg.svg' alt='Sky Bet Logo' />
      <ToggleSwitch onChange={toggleOdds} onLabel='Decimal odds: ON' offLabel='Decimal odds: OFF' />
    </StyledTopbar>
  );
};

export default Topbar;
