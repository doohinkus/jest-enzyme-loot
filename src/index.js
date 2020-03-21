import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {balanceReducer} from './redux/lootcheck.duck';
import App from './components/App';

const store =createStore(balanceReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

