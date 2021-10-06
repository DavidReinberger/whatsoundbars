const getQueryParamsFromAsPath = (query: string) => {
  if (query.length === 1) return {};
  return Object.fromEntries(new URLSearchParams(query.substring(1)));
};

export default getQueryParamsFromAsPath;
