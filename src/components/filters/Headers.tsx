import { Box, Button, FormField, Select, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { FormClose } from 'grommet-icons';
import { Column, TableInstance } from 'react-table';
import { Soundbar } from '../../types';
import { SelectProps } from 'grommet/components/Select';

const SelectedHeader: React.FC<{ header: string, onRemove: (header: string) => void }> = ({ header, onRemove }) => (
  <Button
    key={`header_tag_${header}`}
    href="#"
    onClick={(event) => {
      event.preventDefault();
      event.stopPropagation();
      onRemove(header);
    }}
    onFocus={(event) => event.stopPropagation()}
  >
    <Box
      align="center"
      direction="row"
      gap="xsmall"
      pad={{ vertical: 'xsmall', horizontal: 'small' }}
      margin="xsmall"
      background="brand"
      round="large"
    >
      <Text size="small">{header}</Text>
      <Box round="full" margin={{ left: 'xsmall' }}>
        <FormClose size="small" style={{ width: '12px', height: '12px' }} />
      </Box>
    </Box>
  </Button>
);

const SelectValue: React.FC<{
  headers: string[]
  selected: number[],
  onValueRemoved: (header: string) => void
}> = ({
        headers,
        selected,
        onValueRemoved,
      }) => (
  <Box wrap direction="row" width="small">
    {selected && selected.length ? (
      selected.map((index) => <SelectedHeader header={headers[index]} onRemove={onValueRemoved} />)
    ) : (
      <Box
        pad={{ vertical: 'xsmall', horizontal: 'small' }}
        margin="xsmall"
      >
        Select Header
      </Box>
    )}
  </Box>
);

const HeadersFilters: React.FC<{
  headers: Column[],
  defaultHeaders: number[],
  setCurrentHeaders: TableInstance<Soundbar>['setHiddenColumns'],
}> = ({
        headers,
        defaultHeaders,
        setCurrentHeaders,
      }) => {
  const [selected, setSelected] = useState<number[]>(defaultHeaders);

  // @ts-ignore
  const onChange = ({ selected: nextSelected }: SelectProps['onChange']) => {
    setSelected([...nextSelected].sort());
    setCurrentHeaders(nextSelected.map((index: number) => headers[index].id));
  };

  return (
    <Box>
      <Text margin={{ top: 'xsmall' }}>Hidden Columns</Text>
      <Select
        selected={selected}
        closeOnChange={false}
        options={headers.map(({ Header }) => Header as string)}
        multiple
        onChange={onChange}
      />
    </Box>
  );
};

export default HeadersFilters;
