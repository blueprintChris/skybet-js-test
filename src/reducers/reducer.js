import Actions from '../static/actions';

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

    case Actions.TOGGLE_ODDS:
      return {
        ...state,
        isDecimalOdds: !state.isDecimalOdds,
      };

    case Actions.ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case Actions.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
