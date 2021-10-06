import styled from 'styled-components';
import { Table, TableCell, TableRow } from 'grommet';

export const SoundbarHeader = styled(TableCell)`
  position: sticky;
  top: 0;
`;

SoundbarHeader.defaultProps = {
  scope: 'col',
};

export const SoundbarTableRow = styled(TableRow)`
  td {
    &:first-child {
      border-top-left-radius: 5px;
    }

    &:last-child {
      border-top-left-radius: 5px;
    }
  }
`;

export const SoundbarTable = styled(Table)`
  border-collapse: separate;
  position: relative;

  thead {
    th {
      border: none;
    }
  }

  tbody {
    border-radius: 5px;

    td {
      border: none;
    }

    td + td {
      border-left: 1px solid ${({ theme }) => {
        if (theme.dark) theme.global.colors.border.dark;
        return theme.global.colors.border.light;
      }};
    }

    tr {

      & + tr {
        td {
          border-top: 1px solid ${({ theme }) => {
            if (theme.dark) theme.global.colors.border.dark;
            return theme.global.colors.border.light;
          }};
        }
      }

      &:last-child td {
        border-bottom: 1px solid ${({ theme }) => {
          if (theme.dark) theme.global.colors.border.dark;
          return theme.global.colors.border.light;
        }};
      }

      &:first-child td {
        border-top: 1px solid ${({ theme }) => {
          if (theme.dark) theme.global.colors.border.dark;
          return theme.global.colors.border.light;
        }};
      }

      td:first-child {
        border-left: 1px solid ${({ theme }) => {
          if (theme.dark) theme.global.colors.border.dark;
          return theme.global.colors.border.light;
        }};
      }

      td:last-child {
        border-right: 1px solid ${({ theme }) => {
          if (theme.dark) theme.global.colors.border.dark;
          return theme.global.colors.border.light;
        }};
      }

      &:first-child td {
        &:first-child {
          border-top-left-radius: 5px;
        }

        &:last-child {
          border-top-right-radius: 5px;
        }
      }

    }

    tr:last-child td:first-child {
      border-bottom-left-radius: 5px;
    }

    tr:last-child td:last-child {
      border-bottom-right-radius: 5px;
    }
  }

`;
