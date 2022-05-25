import { ResponseTypes } from './types';

const Actions = {
  ...ResponseTypes,
  CLEAR_ERROR: 'CLEAR_ERROR',
  ERROR: 'ERROR',
  TOGGLE_ODDS: 'TOGGLE_ODDS',
};

export default Actions;
