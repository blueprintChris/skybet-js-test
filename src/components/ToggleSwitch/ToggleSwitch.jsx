import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Label, StyledToggleSwitch, ToggleSwitchInput, ToggleSwitchSlider, Wrapper } from './styles';

const ToggleSwitch = ({ onChange, onLabel, offLabel }) => {
  const [checked, setChecked] = useState(false);
  const { state } = useContext(StoreContext);
  const { isDecimalOdds } = state;

  const handleChange = e => {
    const isChecked = e.target.checked;

    onChange();
    setChecked(isChecked);
  };

  return (
    <Wrapper>
      <Label>{isDecimalOdds ? onLabel : offLabel}</Label>
      <StyledToggleSwitch>
        yes
        <ToggleSwitchInput type='checkbox' onChange={handleChange} data-testid='odds-switch' />
        <ToggleSwitchSlider isChecked={checked} />
      </StyledToggleSwitch>
    </Wrapper>
  );
};

export default ToggleSwitch;
