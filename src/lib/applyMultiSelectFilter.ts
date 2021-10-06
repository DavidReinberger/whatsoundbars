import { FilterType } from 'react-table';
import { Soundbar } from '../types';

const applyMultiSelectFilter: FilterType<Soundbar> = (rows, [id], appliedFilter) => {
  if (Array.isArray(appliedFilter) && appliedFilter.length === 0) return rows;
  if (appliedFilter.length === 0) return rows;
  // @ts-ignore
  return rows.filter(({ original }) => {
    switch (true) {
      // @ts-ignore
      case Array.isArray(original[id]) && Array.isArray(appliedFilter):
        // @ts-ignore
        return appliedFilter.every(item => original[id].includes(item));
      case typeof appliedFilter === 'string':
        // @ts-ignore
        return original[id].includes(appliedFilter);
      default:
        // @ts-ignore
        return appliedFilter.includes(original[id]);
    }
  });
};

export default applyMultiSelectFilter;
