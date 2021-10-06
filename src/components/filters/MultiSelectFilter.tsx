import { Box, Button, Select, Text } from 'grommet';
import { SelectProps } from 'grommet/components/Select';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import getQueryParamsFromAsPath from '../../lib/getQueryParamsFromAsPath';
import { debounce } from 'lodash';
import { RiCloseCircleFill } from 'react-icons/ri';
import styled from 'styled-components';

const WrapBox = styled(Box)`
  > * {
    &:first-child {
      flex-grow: 1;
    }
  }
`;

const MultiSelectFilter: React.FC<{
  onValueChange: SelectProps['onChange'],
  options: SelectProps['options'],
  label: string,
  paramKey?: string,
  initialValue?: string[]
}> = ({
        onValueChange,
        options,
        label,
        paramKey,
        initialValue,
      }) => {
  const router = useRouter();
  const [value, setValue] = useState<string | string[]>(initialValue || []);
  const [innerOptions, setInnerOptions] = useState(options);

  const onClose = useCallback(() => setInnerOptions(options), [options]);
  const setRouterQuery = useCallback(debounce((nextValue) => {
    if (paramKey) {
      const currentQuery = getQueryParamsFromAsPath(window.location.search);
      const query: { [p: string]: any } = {
        ...currentQuery,
        [paramKey]: nextValue ? nextValue.join('|') : '',
      };
      if (!nextValue || (Array.isArray(nextValue) && nextValue.length === 0)) delete query[paramKey];
      router.replace({ query }, undefined, { shallow: true });
    }
  }, 150), [paramKey]);

  const onChange = useCallback((nextValue) => {
    onValueChange?.(nextValue);
    setRouterQuery(nextValue.value);
    setValue(nextValue.value);
  }, [onValueChange, setRouterQuery]);

  return (
    <Box direction="column">
      <Text margin={{ top: '5px' }}>{label}</Text>
      <WrapBox direction="row">
        <Select
          multiple
          clear={{ position: 'bottom' }}
          value={value}
          closeOnChange={false}
          onClose={onClose}
          options={innerOptions}
          onChange={onChange}
          onSearch={text => {
            // The line below escapes regular expression special characters:
            // [ \ ^ $ . | ? * + ( )
            const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

            // Create the regular expression with modified value which
            // handles escaping special characters. Without escaping special
            // characters, errors will appear in the console
            const exp = new RegExp(escapedText, 'i');
            setInnerOptions(options.filter(o => exp.test(o as string)));
          }}
        />
        {value && value.length > 0 && <Button
          icon={<RiCloseCircleFill />}
          onClick={() => onChange({ value: [] })}
        />}
      </WrapBox>
    </Box>
  );
};

export default MultiSelectFilter;
