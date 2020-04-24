import React, {Component} from "react";
import { optionalCallExpression } from "@babel/types";

export default class UserInput extends Component {
    render() {
        return (
            <div className="UserInput">
                <h1>Google Book Search</h1>
                <form className="userInputForm" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" id="search" placeholder="Henry" value={this.state.search} onChange={e => this.searchChanged(e.target.value)}/>
                    <label htmlFor="printType">Print Type:</label>
                    <select id="printType" name="printType">
                        <option value="All">Pick a print type...</option>
                        {optionalCallExpression}
                    </select>
                </form>
            </div>
        )
    }
}

