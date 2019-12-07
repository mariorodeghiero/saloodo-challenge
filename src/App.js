import React, { Component } from "react";
import { GlobalStyle } from "./utils/styled";

import Login from "./Components/Login";
import Dashboard from "./pages/Dashboard";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducer/index";

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <GlobalStyle />
          <Dashboard />
        </>
      </Provider>
    );
  }
}
