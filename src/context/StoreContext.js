import { createContext, useReducer } from 'react';
import reducer from '../reducers/reducer';
import initialState from '../static/initialState';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};
