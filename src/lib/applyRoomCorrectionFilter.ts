import { FilterType } from 'react-table';
import { Soundbar } from '../types';

const applyRoomCorrectionFilter: FilterType<Soundbar> = (rows, id, currentFilterValue) => rows.filter(({ original }) => !!original.roomCorrection === currentFilterValue);

export default applyRoomCorrectionFilter;
