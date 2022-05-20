import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 21rem;
  color: white;
`;

export const Label = styled.span`
  font-size: 1.8rem;
`;

export const ToggleSwitchLabel = styled.label`
  font-size: 12px;
  color: blue;
  margin-bottom: 2px;
`;

export const ToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked {
    background-color: #2196f3;
  }

  &:focus {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => (props.isChecked ? 'white' : 'grey')};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.4rem;

  &:before {
    position: absolute;
    content: '';
    height: 2.6rem;
    width: 2.6rem;
    left: 0.4rem;
    bottom: 0.4rem;
    background-color: #294999;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    ${props => `
        -webkit-transform: translate(${props.isChecked ? '2.6rem' : '0'});
        -ms-transform: translate(${props.isChecked ? '2.6rem' : '0'});
        transform: translate(${props.isChecked ? '2.6rem' : '0'});
      `}
    box-shadow: 1px 1px 0 rgba(12,13,14,0.3), 0 1px 6px rgba(59,64,69,0.1);
  }
`;

export const StyledToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.4rem;
  margin: 0 5px 0 5px;
`;
