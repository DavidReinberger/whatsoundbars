import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Box, Button, RangeSelector, Stack, Text } from 'grommet';
import { RangeSelectorProps } from 'grommet/components/RangeSelector';
import { debounce, throttle, values } from 'lodash';
import { useRouter } from 'next/router';
import getQueryParamsFromAsPath from '../../lib/getQueryParamsFromAsPath';

interface IRangeSelectorProps {
  label: string;
  minValue: number,
  maxValue: number,
  initialRange?: number[];
  onRangeChange: RangeSelectorProps['onChange'];
  routerQueryKey?: string;
}

const noop = () => null;

const DragRangeSelector: React.FC<IRangeSelectorProps> = ({
                                                            minValue,
                                                            maxValue,
                                                            label,
                                                            initialRange,
                                                            onRangeChange,
                                                            routerQueryKey,
                                                          }) => {
  const router = useRouter();
  const [range, setRange] = useState(initialRange ?? [minValue, maxValue]);
  const debouncedRangeChange = useCallback(debounce(onRangeChange ?? noop, 150), [onRangeChange]);
  const setRouterQuery = useCallback(debounce((nextRange: string[]) => {
    routerQueryKey && router.replace({
      query: {
        ...getQueryParamsFromAsPath(window.location.search),
        [routerQueryKey]: nextRange.join('|'),
      },
    }, undefined, { shallow: true });
  }, 150), [routerQueryKey]);

  const onChange = useCallback((nextRange) => {
    setRange(nextRange);
    debouncedRangeChange(nextRange);
    setRouterQuery(nextRange);
  }, [debouncedRangeChange, setRouterQuery]);

  return (
    <Box pad="xsmall" gap="xsmall">
      {label ? <Text>{label}</Text> : null}
      <Stack>
        <Box background="light-4" height="6px" direction="row" />
        <RangeSelector
          direction="horizontal"
          min={minValue}
          max={maxValue}
          step={1}
          values={range}
          onChange={onChange}
        />
      </Stack>
      <Box align="center" margin={{ top: 'xsmall' }}>
        <Text size="small">{`${range[0]}$ - ${range[1]}$`}</Text>
      </Box>
    </Box>
  );
};

export default DragRangeSelector;
