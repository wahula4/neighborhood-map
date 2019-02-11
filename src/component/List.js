import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  render() {
    return (
      <ol className="list">
        {this.props.venues &&
          this.props.venues.map((venue, idx) => (
            <ListItem
              key={idx}
              {...venue}
              handleListItemClick={this.props.handleListItemClick}
            />
          ))}
      </ol>
    );
  }
}
