import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { balanceReducer, initialState } from './redux/lootcheck.duck';
import App from './components/App';
import { loadState, localStorageMiddleWare } from './redux/localStorageHelpers';

// set local storage state as default
const store = createStore(balanceReducer, loadState(initialState), applyMiddleware(localStorageMiddleWare));

// apply middleware set local storage

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

