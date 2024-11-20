import { useEffect, useState } from 'react';
import usePrefersDarkMode from './usePrefersDarkMode';
import useLocalStorage from './useLocalStorage';

const useSetDarkMode = (initialState?: boolean) => {
  const prefersDarkMode = usePrefersDarkMode();
  const [persistedDarkMode, persistDarkMode] = useLocalStorage('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode ?? persistedDarkMode() ?? initialState);

  const setInitialDarkMode = (forcedMode: boolean) => setIsDarkMode(forcedMode ?? persistedDarkMode() ?? prefersDarkMode);

  useEffect(() => {
    persistDarkMode((!!isDarkMode).toString());
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode, setInitialDarkMode] as const;

};

export default useSetDarkMode;
