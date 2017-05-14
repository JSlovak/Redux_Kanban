/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskListReducers from './reducers';
import App from './containers/App';
import './index.css';

const store = createStore(
  taskListReducers, // need to refactor this, but to what?
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);