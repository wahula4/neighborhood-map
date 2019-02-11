import React, { Component } from "react";
import List from "./List";

export default class SideNav extends Component {
// TRYING TO FILTER MUSEUMS BY CATEGORY ID USING DROPDOWN
  render() {
    return (
      <div className="sideNav">
      <form onSubmit={this.props.handleSubmit}>
          <label>
            Pick a musuem type
            <select value={this.props.value} onChange={this.props.handleChange}>
              <option value="All">All</option>
              <option value="4bf58dd8d48988d18f941735">Art Museum</option>
              <option value="4bf58dd8d48988d190941735">History Museum</option>
              <option value="4bf58dd8d48988d191941735">Science Museums</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <List
          {...this.props}
          handleListItemClick={this.props.handleListItemClick}
        />
      </div>
    );
  }
}
