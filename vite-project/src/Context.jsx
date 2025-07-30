import { createContext, useReducer } from "react";
import { initialState, Reducer } from "./Reucer";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
