import { useEffect, useState } from 'react';
import usePrefersDarkMode from './usePrefersDarkMode';
import useLocalStorage from './useLocalStorage';

const useSetDarkMode = (initialState?: boolean) => {
  const prefersDarkMode = usePrefersDarkMode();
  const [persistedDarkMode, persistDarkMode] = useLocalStorage('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(persistedDarkMode() ?? initialState ?? prefersDarkMode);

  const setInitialDarkMode = (forcedMode: boolean) => setIsDarkMode(forcedMode ?? persistedDarkMode() ?? prefersDarkMode);

  useEffect(() => {
    persistDarkMode((!!isDarkMode).toString());
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode, setInitialDarkMode];

};

export default useSetDarkMode;
