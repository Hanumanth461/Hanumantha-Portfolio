import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#171717',
    },
     secondary: {
      main: '#7d7d7d',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff', 
      primary:'#ffffff'
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
   primary: {
      main: '#ffffff',
    },
     secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#212224',
      paper: '#212224',
      primary:'#2A2E38'
    },
  },
});
