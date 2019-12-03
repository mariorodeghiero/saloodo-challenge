import React, { Component } from "react";
import { GlobalStyle } from "./utils/styled";
import Login from "./Components/Login";
import MenuBar from "./Components/MenuBar";

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <Login /> */}
        <MenuBar />
      </>
    );
  }
}
