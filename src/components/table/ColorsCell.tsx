import styled from 'styled-components';
import React from 'react';
import ListCell from './ListCell';

const ColorDot = styled.span<{ itemValue: string }>`
  width: 1em;
  height: 1em;
  background-color: ${({ itemValue }) => itemValue};
  border-radius: 0.5em;
  border: 2px solid #f3f3f3;
  display: inline-block;
  margin-right: 5px;
  vertical-align: text-bottom;
`;

const ColorsCell: React.FC<{ value: string | [string] }> = ({ value }) => (
  <ListCell
    value={typeof value === 'string' ? [value] : value}
    PreContent={ColorDot}
  />
);

export default ColorsCell;
