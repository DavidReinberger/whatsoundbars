import { FilterType } from 'react-table';
import { Soundbar } from '../types';

const applyExtendableFilter: FilterType<Soundbar> = (rows, id, toggleStatus) => {
  if (!toggleStatus) return rows;
  return rows.filter(({ original }) => original.extendable.length > 0);
};

export default applyExtendableFilter;
