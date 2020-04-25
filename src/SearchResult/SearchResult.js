import React, { Component } from "React";

export default class SearchResult extends Component {
 render() {
    return (
        <div className="SearchResult">
            <h2>Book Title</h2>
            <p>Author</p>
            <p>Price</p>
            <p>Description</p>
        </div>
    );
  }
}