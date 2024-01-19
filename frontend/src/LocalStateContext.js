import React, {createContext, useState} from 'react';

const initialLocalState = {};

export const LocalStateContext = createContext();

export const LocalStateProvider = ({children}) => {
  const [localState, setLocalState] = useState(initialLocalState);

  return <LocalStateContext.Provider value={{localState, setLocalState}}>{children}</LocalStateContext.Provider>;
};
