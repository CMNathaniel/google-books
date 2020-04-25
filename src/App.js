import React, { Component } from "react";
import UserInput from "./UserInput";
import ResultList from "./ResultList";
//import { render } from '@testing-library/react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      printType: "",
      bookType: ""
    };
  }

  componentDidMount() {
  const api key = AIzaSyDeUHZTtiBgPtgClwbcZlqW6mr2hNUbfjc
  const searchURL = 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
  const filters = 
  const url = searchURL + ? + queryString;
 
    const url = ;
    const options = {
      method: 'GET',
    };
  

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    }

  render() {

   return (
    <div className="App">
      <UserInput searchTerm={this.state.searchTerm} printType={this.state.printType} bookType={this.state.bookType} />
      <ResultList searchTerm={this.state.searchTerm} printType={this.state.printType} bookType={this.state.bookType} />
    </div>
  );
 }
}
