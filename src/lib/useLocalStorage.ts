import { useCallback } from 'react';

const noop = () => null;

type RUseLocalStorage = [getItem: () => any, setItem: (value: string) => void];

const useLocalStorage = (key: string): RUseLocalStorage => {
  if (typeof window === 'undefined') return [noop, noop];

  const getItem = useCallback(() => JSON.parse(window.localStorage.getItem(key) || 'null'), [key]);
  const setItem = useCallback((value: string) => window.localStorage.setItem(key, value), [key]);

  return [getItem, setItem];
};

export default useLocalStorage;
