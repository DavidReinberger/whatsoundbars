import { ThemeType } from 'grommet/themes/base';

const NormalTheme: ThemeType = {
  global: {
    colors: {
      background: {
        dark: '#0E1116',
        light: '#EBEBEB',
      },
      text: {
        dark: '#EBEBEB',
      },
      brand: '#4062BB',
      control: '#BB0A21',
      border: {
        light: '#bfbfbf',
      },
    },
  },
  heading: {
    font: {
      family: 'Bebas Neue',
    },
  },
  select: {
    clear: {
      text: {
        color: 'white',
      },
      container: {
        background: 'status-error',
      },
    },
  },
  table: {
    header: {
      border: 'bottom',
      align: 'center',
    },
  },
};

export default NormalTheme;
