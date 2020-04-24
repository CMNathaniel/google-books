import React, { Component } from "react";

export default class ResultList extends Component {
    render() {
    return (
        <div className="ResultList">
        Results from the search term {props.searchTerm}, {props.printType}, {props.bookType}
        </div>
    );
  }
}