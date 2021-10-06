import { FilterType } from 'react-table';
import { Soundbar } from '../types';

const applyNumberRangeFilter: FilterType<Soundbar> = (rows, id, [min, max]) => {
  if (!min || !max) return rows;

  const minYear = parseInt(min, 10);
  const maxYear = parseInt(max, 10);
  return rows.filter(({ original }) => original.modelYear >= minYear && original.modelYear <= maxYear);
};

export default applyNumberRangeFilter;
