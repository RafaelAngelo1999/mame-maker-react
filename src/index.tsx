import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const PRIMARY_COLOR = '#656D75';
export const SECONDARY_COLOR = '#BA68C8';
export const TIME_SUGGESTION_COLOR = '#00CE0E';
export const BACKGROUND_COLOR = '#FFFFFF';

export const LIGHT_GRAY1 = '#8CA0B3';
export const LIGHT_GRAY2 = '#C0C6D6';
export const LIGHT_GRAY3 = '#61688B';
export const LIGHT_GRAY4 = '#D8D8D8';
export const LIGHT_GRAY5 = '#EDEDED';

const theme = createTheme({
  palette: {
    primary: {
      dark: PRIMARY_COLOR,
      main: PRIMARY_COLOR,
      light: PRIMARY_COLOR,
    },
    secondary: {
      dark: SECONDARY_COLOR,
      main: SECONDARY_COLOR,
      light: SECONDARY_COLOR,
    },
    success: {
      dark: '#0093a2',
      main: '#02c4d3',
      light: '#64f7ff',
    },
    warning: {
      dark: '#C15100',
      main: '#FA8022',
      light: '#FFB154',
    },
    error: {
      dark: '#b0002c',
      main: '#e84855',
      light: '#FF7c81',
    },
    info: {
      dark: '#00458e',
      main: '#276fbf',
      light: '#669df2',
    },
    text: {
      primary: '#29373D',
      secondary: '#6C8E9D',
      disabled: '#B6C6CE',
    },
    background: {
      default: BACKGROUND_COLOR,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
