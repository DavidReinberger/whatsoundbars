import { FilterType } from 'react-table';
import { Soundbar } from '../types';
import parseMsrp from './parseMsrp';

const applyMoneyRangeFilter: FilterType<Soundbar> = (rows, id, [min, max]) => {
  if (min === 0 && max === 2500) return rows;

  const minPrice = parseInt(min, 10);
  const maxPrice = parseInt(max, 10);
  return rows.filter(({ original }) => {
    const { MSRP } = original;
    const msrp = parseMsrp(MSRP);
    return msrp >= minPrice && msrp <= maxPrice;
  });
};

export default applyMoneyRangeFilter;
