import SoundbarCell from '../components/table/SoundbarCell';
import ExtendableThingsCell from '../components/table/ExtendableThingsCell';
import BooleanCell from '../components/table/BooleanCell';
import BoxContentCell from '../components/table/BoxContentCell';
import ListCell from '../components/table/ListCell';
import ColorsCell from '../components/table/ColorsCell';
import { Column } from 'react-table';
import applyMultiSelectFilter from './applyMultiSelectFilter';
import { Soundbar } from '../types';
import applyNumberRangeFilter from './applyNumberRangeFilter';
import applyExtendableFilter from './applyExtendableFilter';
import applyMoneyRangeFilter from './applyMoneyRangeFilter';
import MSRP from '../components/table/MSRP';
import applyRoomCorrectionFilter from './applyRoomCorrectionFilter';
import RoomCorrectionCell from '../components/table/roomCorrection';

const tableColumnsConfig: Column<Soundbar>[] = [
  {
    Header: 'Soundbar',
    Cell: SoundbarCell,
    id: 'soundbar',
    disableSortBy: true,
  },
  {
    Header: 'Year Released',
    accessor: 'modelYear',
    id: 'modelYear',
    filter: applyNumberRangeFilter,
  },
  {
    Header: 'Manufacturer',
    accessor: 'manufacturer',
    id: 'manufacturer',
    filter: applyMultiSelectFilter,
    disableSortBy: true,
  },
  {
    Header: 'Speaker Setup',
    accessor: 'speakerSetup',
    id: 'speakerSetup',
    filter: applyMultiSelectFilter,
    disableSortBy: true,
  },
  {
    Header: 'Is Extendable',
    accessor: 'extendable',
    id: 'extendable',
    Cell: ExtendableThingsCell,
    filter: applyExtendableFilter,
    disableSortBy: true,
  },
  {
    Header: 'Has wireless surrounds',
    accessor: 'wirelessSurrounds',
    id: 'wirelessSurrounds',
    Cell: BooleanCell,
  },
  {
    Header: 'Has wireless subwoofer',
    accessor: 'wirelessSubwoofer',
    id: 'wirelessSubwoofer',
    Cell: BooleanCell,
  },
  {
    Header: 'Soundbar dimensions',
    accessor: 'dimensions',
    id: 'dimensions',
    Cell: BooleanCell,
    disableSortBy: true,
  },
  {
    Header: 'MSRP',
    accessor: 'MSRP',
    id: 'MSRP',
    filter: applyMoneyRangeFilter,
    Cell: MSRP,
  },
  {
    Header: 'Wall mountable',
    accessor: 'wallMountable',
    id: 'wallMountable',
    Cell: BooleanCell,

  },
  {
    Header: 'Whats in the box',
    accessor: 'boxContents',
    id: 'boxContents',
    Cell: BoxContentCell,
    disableSortBy: true,
  },
  {
    Header: 'Available inputs',
    accessor: 'inputs',
    id: 'inputs',
    Cell: ListCell,
    filter: applyMultiSelectFilter,
    disableSortBy: true,
  },
  {
    Header: 'Streaming Support',
    accessor: 'streamingServicesSupport',
    id: 'streamingServicesSupport',
    Cell: ListCell,
    filter: applyMultiSelectFilter,
    disableSortBy: true,
  },
  {
    Header: 'Virtual Assistants',
    accessor: 'virtualAssistantSupport',
    id: 'virtualAssistantSupport',
    Cell: ListCell,
    filter: applyMultiSelectFilter,
    disableSortBy: true,
  },
  {
    Header: 'Audio Support',
    accessor: 'audioCodingSupport',
    id: 'audioCodingSupport',
    Cell: ListCell,
    filter: applyMultiSelectFilter,
    disableSortBy: true,
  },
  {
    Header: 'Controllers',
    accessor: 'controlledVia',
    id: 'controlledVia',
    Cell: ListCell,
    filter: applyMultiSelectFilter,
    disableSortBy: true,
  },
  {
    Header: 'Colors',
    accessor: 'color',
    id: 'color',
    Cell: ColorsCell,
    disableSortBy: true,
  },
  {
    Header: 'Room Correction',
    accessor: 'roomCorrection',
    id: 'roomCorrection',
    Cell: RoomCorrectionCell,
    filter: applyRoomCorrectionFilter,
  },
  {
    Header: 'HDR',
    accessor: 'HDR',
    id: 'HDR',
    Cell: BooleanCell,

  },
  {
    Header: 'Pass trough',
    accessor: 'passThrough',
    id: 'passThrough',
    Cell: BooleanCell,

  },
];

export default tableColumnsConfig;
