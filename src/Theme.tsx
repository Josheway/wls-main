import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#c17e17',
    },
    secondary: {
      main: '#17c16d',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
