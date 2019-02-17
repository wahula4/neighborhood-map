// https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm

import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    return (
      <ol className="list" role="list">
      {/* if there are venues display each venue and with the props from app.js */}
        {this.props.venues &&
          this.props.venues.map((venue, index) => (
            <ListItem
              key={index}
              {...venue}
              handleListItemClick={this.props.handleListItemClick}
            />
          ))}
      </ol>
    );
  }
}

export default List;
