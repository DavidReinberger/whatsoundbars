import { Text, Box, Select, Button } from 'grommet';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import getQueryParamsFromAsPath from '../../lib/getQueryParamsFromAsPath';
import { RiCloseCircleFill } from 'react-icons/ri';

interface IYearFilterProps {
  availableYears: number[];
  setYearRange: (minYear: string, maxYear: string) => void;
  initialRange: number[];
}

const YearFilter: React.FC<IYearFilterProps> = ({
                                                  setYearRange,
                                                  availableYears,
                                                  initialRange,
                                                }) => {
  const router = useRouter();
  const [minYear, setMinYear] = useState(initialRange?.[0] ?? availableYears[0]);
  const [maxYear, setMaxYear] = useState(initialRange?.[1] ?? availableYears[availableYears.length - 1]);

  const disabledOptionsMaxYear = availableYears.reduce<number[]>((acc, year, index) => {
    if (year < minYear) acc.push(index);
    return acc;
  }, []);

  const disabledOptionsMinYear = availableYears.reduce<number[]>((acc, year, index) => {
    if (year > maxYear) acc.push(index);
    return acc;
  }, []);

  const onYearRangeChange = useCallback(([min, max]: number[]) => {
    min && setMinYear(min);
    max && setMaxYear(max);
    setYearRange(min.toString(), max.toString());
    router.replace({
      query: {
        ...getQueryParamsFromAsPath(window.location.search),
        modelYear: [min, max].join('|'),
      },
    });
  }, [setYearRange]);

  const hideReset = minYear === availableYears[0] && maxYear === availableYears[availableYears.length - 1];

  return (
    <Box direction="column">
      <Text margin={{ top: '5px' }}>Model Year</Text>
      <Box direction="row">
        <Select
          options={availableYears}
          disabled={disabledOptionsMinYear}
          value={minYear as unknown as string}
          margin={{ right: '5px' }}
          onChange={({ option }) => onYearRangeChange([option, maxYear])}
        />
        <Select
          options={availableYears}
          disabled={disabledOptionsMaxYear}
          value={maxYear as unknown as string}
          onChange={({ option }) => onYearRangeChange([minYear, option])}
        />
        {!hideReset && <Button
          icon={<RiCloseCircleFill />}
          onClick={() => onYearRangeChange([availableYears[0], availableYears[availableYears.length - 1]])}
        />}
      </Box>
    </Box>
  );
};

export default YearFilter;
