// https://reactjs.org/docs/forms.html

import React, { Component } from "react";
import List from "./List";

class SideNav extends Component {
  // TRYING TO FILTER MUSEUMS BY CATEGORY ID USING DROPDOWN
  render() {
    return (
      <div className="sideNav">
        <form>
          {/* using label for accessibility */}
          <label>
            New York Musuems
            <select value={this.props.value} 
                    onChange={this.props.handleChange}
                    >
              <option value="">Pick a type</option>
              <option value="4bf58dd8d48988d18f941735">Art Museum</option>
              <option value="4bf58dd8d48988d190941735">History Museum</option>
              <option value="4bf58dd8d48988d191941735">Science Museums</option>
            </select>
          </label>
        </form>
        <List
          {...this.props}
          handleListItemClick={this.props.handleListItemClick}
        />
      </div>
    );
  }
}

export default SideNav;