import Actions from '../static/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.LIVE_EVENTS_DATA:
      return {
        ...state,
        events: action.payload,
      };

    case Actions.MARKET_DATA:
      return {
        ...state,
        markets: { ...state.markets, ...action.payload },
      };

    case Actions.OUTCOME_DATA:
      return {
        ...state,
        outcomes: { ...state.outcomes, ...action.payload },
      };

    case Actions.EVENT_DATA:
      return {
        ...state,
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
