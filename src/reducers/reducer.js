import Actions from '../static/actions';
import initialState from '../static/initialState';

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.LIVE_EVENTS_DATA:
      return {
        ...state,
        error: null,
        events: action.payload,
      };

    case Actions.MARKET_DATA:
      return {
        ...state,
        error: null,
        markets: { ...state.markets, ...action.payload },
      };

    case Actions.OUTCOME_DATA:
      return {
        ...state,
        error: null,
        outcomes: { ...state.outcomes, ...action.payload },
      };

    case Actions.EVENT_DATA:
      return {
        ...state,
        error: null,
        selectedEvent: action.payload,
      };

    case Actions.LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case Actions.LOADING_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };

    case Actions.TOGGLE_ODDS:
      return {
        ...state,
        isDecimalOdds: !state.isDecimalOdds,
      };

    case Actions.ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case Actions.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case Actions.RESET_STATE:
      return {
        ...initialState,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
