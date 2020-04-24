import React, { Component } from "React";
import "./index.css";
import UserInput from "./UserInput";
import Resultlist from "./ResultList";

export default class App extends Component {
 render() {
    return (
        <div className="App">
            <UserInput />
            <ResultList />
        </div>
    )

 }

}