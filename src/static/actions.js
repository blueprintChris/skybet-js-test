import { ResponseTypes } from './types';

const Actions = {
  ...ResponseTypes,
  CLEAR_ERROR: 'CLEAR_ERROR',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  LOADING_COMPLETE: 'LOADING_COMPLETE',
  RESET_STATE: 'RESET_STATE',
  TOGGLE_ODDS: 'TOGGLE_ODDS',
};

export default Actions;
