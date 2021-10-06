import { Box, CheckBox, Text } from 'grommet';
import { SelectProps } from 'grommet/components/Select';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import getQueryParamsFromAsPath from '../../lib/getQueryParamsFromAsPath';

interface IToggleFilter {
  label: string;
  onToggle: SelectProps['onChange'],
  paramKey?: string;
  initialValue?: boolean
}

const ToggleFilter: React.FC<IToggleFilter> = ({ label, onToggle, paramKey, initialValue }) => {
  const router = useRouter();
  const onToggleChange = useCallback((value) => {
    onToggle?.(value);
    if (paramKey) {
      const currentQuery = getQueryParamsFromAsPath(window.location.search);
      const query: { [p: string]: any } = { ...currentQuery, [paramKey]: value.target.checked };
      if (!value.target.checked) delete query[paramKey];
      router.replace({
        query,
      }, undefined, { shallow: true });
    }
  }, [onToggle]);

  const isInitiallyChecked = initialValue !== undefined ? { checked: initialValue } : {};

  return (
    <Box direction="row" margin={{ top: '5px' }}>
      <CheckBox toggle label={label} onChange={onToggleChange} {...isInitiallyChecked} />
    </Box>
  );
};

export default ToggleFilter;
