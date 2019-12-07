import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Dashboard from './pages/Dashboard';
import { GlobalStyle } from './utils/styled';
import reducer from './reducer/index';

const store = createStore(reducer, applyMiddleware(thunk, logger));
const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  </Provider>
);

export default App;
