import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const history = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5C5D67',
      dark: '#131316',
    },
    secondary: {
      main: '#B3976B',
      light: '#F1ECE4',
    },
    error: {
      main: '#37000A',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
