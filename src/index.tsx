import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

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

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
