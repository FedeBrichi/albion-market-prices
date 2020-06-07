import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import {ItemProvider} from './hooks/item-hooks'

ReactDOM.render(
  <ItemProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ItemProvider>,
  document.getElementById('root'),
);
