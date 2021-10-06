import React from 'react';
import { Box, CheckBox } from 'grommet';
import styled from 'styled-components';

interface IDarkModeToggle {
  isDarkMode: boolean,
  setDarkMode: (value: boolean) => void
}

const AbsoluteBox = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
`;

const DarkModeToggle: React.FC<IDarkModeToggle> = ({ isDarkMode, setDarkMode }) => {
  return (
    <AbsoluteBox pad="small">
      <CheckBox
        label="Dark Mode"
        toggle
        checked={isDarkMode}
        onChange={(value) => setDarkMode(value.target.checked)}
      />
    </AbsoluteBox>
  );
};

export default DarkModeToggle;
