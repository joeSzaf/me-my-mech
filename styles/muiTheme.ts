import { createTheme, ThemeOptions } from '@mui/material/styles';

const badgerHubThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2D1A00',
    },
    secondary: {
      main: '#1e5c5c',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
};

export const badgerHubTheme = createTheme(badgerHubThemeOptions);
