import { createContext, useContext, useReducer, useState } from 'react';

import { appReducer } from '@/reducers/appReducer';
import { REDUCER_INITIAL_STATE } from '@/utils/constants';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [queryResults, setQueryResults] = useState(null);
  const [appState, appDispatch] = useReducer(appReducer, REDUCER_INITIAL_STATE);

  return (
    <AppContext.Provider
      value={{
        appDispatch,
        appState,
        query,
        setQuery,
        queryResults,
        setQueryResults,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
