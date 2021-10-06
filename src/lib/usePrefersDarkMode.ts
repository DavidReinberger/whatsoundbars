const usePrefersDarkMode = (): boolean => {
  if (typeof window === 'undefined') return false; // we are on server
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export default usePrefersDarkMode;
