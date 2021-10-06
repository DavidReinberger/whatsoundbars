import { Box, Text } from 'grommet';
import { AiFillFilter } from 'react-icons/ai';
import styled from 'styled-components';

const StyledDivider = styled(Box)`
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    top: 50%;
    background: ${({ theme }) => {
      if (theme.dark) return theme.global.colors.background.light;
      return theme.global.colors.background.dark;
    }};
    height: 1px;
    width: 100%;
    left: 0;
    z-index: 0;
  }
`;

const BackgroundWrapper = styled(Box)`
  z-index: 1;
  background: ${({ theme }) => {
    if (theme.dark) return theme.global.colors.background.dark;
    return theme.global.colors.background.light;
  }};
`;

interface IDividerProps {
  onClick: () => any;
  closed: boolean;
}

const Divider: React.FC<IDividerProps> = ({ onClick, closed }) => {
  return (
    <StyledDivider
      onClick={onClick}
      align="center"
      margin={!closed ? { top: 'small' } : undefined}
    >
      <BackgroundWrapper direction="row" align="center" pad={{ right: 'xsmall', left: 'xsmall' }}>
        <Text>{closed ? 'Open' : 'Close'} Filters</Text> <AiFillFilter />
      </BackgroundWrapper>
    </StyledDivider>
  );
};

export default Divider;
