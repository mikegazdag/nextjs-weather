import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(false);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        weather,
        setWeather,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
