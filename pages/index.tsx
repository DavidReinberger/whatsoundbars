import { useContext, useEffect, useMemo, useState } from 'react';
import { Filters, IdType, useFilters, useSortBy, useTable } from 'react-table';
import type { NextPage } from 'next';
import type { Soundbar } from '../src/types';
import {
  AudioCodings,
  Connectivity,
  Controllers,
  Manufacturers,
  SpeakerSetup,
  StreamingServices,
  VirtualAssistants,
} from '../src/types';
import { SoundbarHeader, SoundbarTable } from '../src/components/table/table';
import {
  Box,
  Collapsible,
  Grid,
  Header,
  Heading,
  Main, ResponsiveContext,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet';
import type { BorderType } from 'grommet/utils';
import HeadersFilters from '../src/components/filters/Headers';
import MultiSelectFilter from '../src/components/filters/MultiSelectFilter';
import tableColumnsConfig from '../src/lib/columns';
import YearFilter from '../src/components/filters/YearFilter';
import ToggleFilter from '../src/components/filters/ToggleFilter';
import DragRangeSelector from '../src/components/filters/DragRangeSelector';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import yamaha from '../src/data/yamaha';
import lg from '../src/data/lg';
import sonos from '../src/data/sonos';
import samsung from '../src/data/samsung';
import philips from '../src/data/philips';
import jbl from '../src/data/jbl';
import bose from '../src/data/bose';
import bangAndOlufsen from '../src/data/BangAndOlufsen';
import denon from '../src/data/denon';
import klipsch from '../src/data/klipsch';
import PolkAudio from '../src/data/polkaudio';
import HarmanKardon from '../src/data/harmanKardon';
import Sony from '../src/data/sony';
import getQueryParamsFromAsPath from '../src/lib/getQueryParamsFromAsPath';
import { parseInt } from 'lodash';
import parseQueryParamsToFilters from '../src/lib/parseQueryParamsToFilters';
import { unstable_batchedUpdates } from 'react-dom';
import Divider from '../src/components/Divider';
import parseMsrp from '../src/lib/parseMsrp';

const tableBodyCellBorderStyle: BorderType = [
  { side: 'bottom' },
  { side: 'between' },
];

const speakerSetups = Object.values(SpeakerSetup);
const manufacturers = Object.values(Manufacturers).sort((a, b) => a.localeCompare(b));
const connectivity = Object.values(Connectivity).sort((a, b) => a.localeCompare(b));
const streamingServices = Object.values(StreamingServices).sort((a, b) => a.localeCompare(b));
const virtualAssistants = Object.values(VirtualAssistants).sort((a, b) => a.localeCompare(b));
const audiCodingsSupport = Object.values(AudioCodings).sort((a, b) => a.localeCompare(b));
const controllers = Object.values(Controllers).sort((a, b) => a.localeCompare(b));

const defaultHiddenHeaderIndexes = [1, 2, 5, 6, 7, 15, 16, 18, 19];
const defaultHiddenColumns = defaultHiddenHeaderIndexes.map((index) => tableColumnsConfig[index].id as string);

type FiltersIds = IdType<Soundbar>;

const filtersGrid: { [k: string]: { [k: string]: string[] } } = {
  small: {
    columns: ['auto'],
    rows: ['repeat(12, max-content)'],
  },
  medium: {
    columns: ['1fr', '1fr', '1fr'],
    rows: ['max-content', 'max-content', 'max-content'],
  },
  large: {
    columns: ['1fr', '1fr', '1fr', '1fr'],
    rows: ['max-content', 'max-content', 'max-content'],
  },
};

// @ts-ignore
const Home: NextPage = ({ soundbars, years, price: [minValue, maxValue], pricePoints, detectInitialDarkMode }) => {
  const breakpoint = useContext(ResponsiveContext);
  const data = useMemo<Soundbar[]>(() => soundbars, []);
  // @ts-ignore
  const columns = useMemo(() => tableColumnsConfig, []);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const query = getQueryParamsFromAsPath(typeof window !== 'undefined' ? window.location.search : '');

  const filters: { id: FiltersIds, value: any }[] = useMemo(() => Object.entries(query).reduce<Filters<Soundbar>>((acc, [key, val]) => {
    const value = parseQueryParamsToFilters(key, val);
    if (value === undefined || value === null || value === '') return acc;
    acc.push({ id: key, value });
    return acc;
  }, []), [query]);

  const initialValues = useMemo(() => filters.reduce<{ [key: FiltersIds]: any }>((acc, { id, value }) => ({
    ...acc,
    [id]: value,
  }), {}), [filters]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    setHiddenColumns,
  } = useTable<Soundbar>({
      columns,
      data,
      initialState: {
        hiddenColumns: defaultHiddenColumns,
        sortBy: [{ id: 'MSRP', desc: true }],
      },
    },
    useFilters,
    useSortBy,
  );

  useEffect(() => {
    unstable_batchedUpdates(() => {
      filters.forEach(({ id, value }) => setFilter(id, value));
    });
  }, []);

  const toggleCollapse = () => setIsCollapsed((state) => !state);

  return (
    <Grid
      rows={['auto', 'auto', 'auto']}
      columns={['auto']}
      fill
      gap="small"
      areas={[
        { name: 'header', start: [0, 0], end: [0, 0] },
        { name: 'nav', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [0, 2], end: [0, 2] },
      ]}
    >
      <Box gridArea="header">
        <Header alignContent="center" justify="center" pad="medium">
          <Heading level={1} margin="none">WHAT SOUNDBARS?</Heading>
        </Header>
      </Box>
      <Box gridArea="nav" pad="small">
        <Collapsible open={!isCollapsed}>
          <Grid
            fill
            rows={filtersGrid[breakpoint].rows}
            columns={filtersGrid[breakpoint].columns}
            gap="small"
          >
            <HeadersFilters
              // @ts-ignore
              headers={tableColumnsConfig}
              defaultHeaders={defaultHiddenHeaderIndexes}
              setCurrentHeaders={setHiddenColumns}
            />
            <YearFilter
              initialRange={initialValues.modelYear}
              availableYears={years}
              setYearRange={(...range) => setFilter('modelYear', range)}
            />
            <MultiSelectFilter
              label="Manufacturer"
              options={manufacturers}
              onValueChange={({ value: next }) => setFilter('manufacturer', next)}
              paramKey="manufacturer"
              initialValue={initialValues.manufacturer}
            />
            <MultiSelectFilter
              label="Speaker Setup"
              options={speakerSetups}
              onValueChange={({ value: next }) => setFilter('speakerSetup', next)}
              paramKey="speakerSetup"
              initialValue={initialValues.speakerSetup}
            />
            <MultiSelectFilter
              label="Available Inputs"
              options={connectivity}
              onValueChange={({ value: next }) => setFilter('inputs', next)}
              paramKey="inputs"
              initialValue={initialValues.inputs}
            />
            <MultiSelectFilter
              label="Streaming Support"
              options={streamingServices}
              onValueChange={({ value: next }) => setFilter('streamingServicesSupport', next)}
              paramKey="streamingServicesSupport"
              initialValue={initialValues.streamingServicesSupport}
            />
            <MultiSelectFilter
              label="Virtual Assistants"
              options={virtualAssistants}
              onValueChange={({ value: next }) => setFilter('virtualAssistantSupport', next)}
              paramKey="virtualAssistantSupport"
              initialValue={initialValues.virtualAssistantSupport}
            />
            <MultiSelectFilter
              label="Audio Support"
              options={audiCodingsSupport}
              onValueChange={({ value: next }) => setFilter('audioCodingSupport', next)}
              paramKey="audioCodingSupport"
              initialValue={initialValues.audioCodingSupport}
            />
            <MultiSelectFilter
              label="Controllers"
              options={controllers}
              onValueChange={({ value: next }) => setFilter('controlledVia', next)}
              paramKey="controlledVia"
              initialValue={initialValues.controlledVia}
            />
            <DragRangeSelector
              label="MSRP"
              minValue={minValue}
              maxValue={maxValue}
              initialRange={initialValues.MSRP}
              onRangeChange={(next) => setFilter('MSRP', next)}
              routerQueryKey="MSRP"
            />
            <Box>
              <ToggleFilter
                label="Is System Extendable"
                onToggle={({ target: { checked: next } }) => setFilter('extendable', next)}
                initialValue={initialValues.extendable}
                paramKey="extendable"
              />
              <ToggleFilter
                label="Wall mountable"
                onToggle={({ target: { checked: next } }) => setFilter('wallMountable', next)}
                initialValue={initialValues.wallMountable}
                paramKey="wallMountable"
              />
              <ToggleFilter
                label="Surround wireless"
                onToggle={({ target: { checked: next } }) => setFilter('wirelessSurrounds', next)}
                initialValue={initialValues.wirelessSurrounds}
                paramKey="wirelessSurrounds"
              />
              <ToggleFilter
                label="Subwoofer wireless"
                onToggle={({ target: { checked: next } }) => setFilter('wirelessSubwoofer', next)}
                initialValue={initialValues.wirelessSubwoofer}
                paramKey="wirelessSubwoofer"
              />
            </Box>
            <Box>
              <ToggleFilter
                label="Room Correction"
                onToggle={({ target: { checked: next } }) => setFilter('roomCorrection', next)}
                initialValue={initialValues.roomCorrection}
                paramKey="roomCorrection"
              />
              <ToggleFilter
                label="HDR Passthrough"
                onToggle={({ target: { checked: next } }) => setFilter('HDR', next)}
                initialValue={initialValues.HDR}
                paramKey="HDR"
              />
              <ToggleFilter
                label="Passthrough"
                onToggle={({ target: { checked: next } }) => setFilter('passThrough', next)}
                initialValue={initialValues.passThrough}
                paramKey="passThrough"
              />
            </Box>
          </Grid>
        </Collapsible>
        <Divider onClick={toggleCollapse} closed={isCollapsed} />
      </Box>
      <Box gridArea="main">
        <Main pad={'small'}>
          <SoundbarTable {...getTableProps()}>
            <TableHeader>
              {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <SoundbarHeader
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <Box direction="row" wrap={false} justify="center" align="center">
                        <span>{column.render('Header')}</span>
                        {
                          column.canSort ?
                            (<Box responsive direction="column" flex={'shrink'} margin={{ left: '5px' }}>
                              <Text color={column.isSorted ?
                                !column.isSortedDesc ? 'dark-1' : 'dark-6' :
                                'light-3'}><AiFillCaretUp /></Text>
                              <Text color={
                                column.isSorted ?
                                  column.isSortedDesc ? 'dark-1' : 'dark-6' :
                                  'light-3'
                              }><AiFillCaretDown /></Text>
                            </Box>) : null
                        }
                      </Box>
                    </SoundbarHeader>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <TableCell border={tableBodyCellBorderStyle}
                                   {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </SoundbarTable>
        </Main>
      </Box>
    </Grid>
  );
};

export async function getStaticProps() {
  const soundbars: Soundbar[] = [
    ...lg,
    ...sonos,
    ...samsung,
    ...philips,
    ...jbl,
    ...yamaha,
    ...bose,
    ...bangAndOlufsen,
    ...denon,
    ...klipsch,
    ...PolkAudio,
    ...HarmanKardon,
    ...Sony
  ].map((soundbar) => {
    const boxContents = soundbar.boxContents.sort((a, b) => a.localeCompare(b));
    const inputs = soundbar.inputs.sort((a, b) => a.localeCompare(b));
    const extendable = soundbar.extendable.sort(({ name: aName }, { name: bName }) => aName.localeCompare(bName));
    const streamingServicesSupport = soundbar.streamingServicesSupport.sort((a, b) => a.localeCompare(b));
    const virtualAssistantSupport = soundbar.virtualAssistantSupport.sort((a, b) => a.localeCompare(b));
    const audioCodingSupport = soundbar.audioCodingSupport.sort((a, b) => a.localeCompare(b));
    const controlledVia = soundbar.controlledVia.sort((a, b) => a.localeCompare(b));

    return {
      ...soundbar,
      boxContents,
      inputs,
      extendable,
      streamingServicesSupport,
      virtualAssistantSupport,
      audioCodingSupport,
      controlledVia,
    };
  });

  const years = [...new Set(soundbars.map(({ modelYear }) => modelYear).sort((a, b) => a - b))];
  const prices = soundbars.map(({ MSRP }) => parseMsrp(MSRP)).sort((a, b) => a - b);
  const minPrice = prices[0];
  const maxPrice = prices[prices.length - 1];

  return {
    props: {
      soundbars,
      years,
      price: [minPrice, maxPrice],
    },
  };
}

export default Home;
