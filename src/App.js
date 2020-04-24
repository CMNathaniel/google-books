import React, { Component } from "react";
import UserInput from "./UserInput/UserInput.js";
import ResultList from "./ResultList/ResultList.js";
//import { render } from '@testing-library/react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      printType: "",
      bookType: ""
    }
  }
  render() {
  return (
    <div className="App">
      <UserInput />
      <ResultList />
    </div>
  );
 }
}
