import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      // display each musuem name and run the handleListItemClick function on click
      <li
        className="listItem"
        onClick={() => this.props.handleListItemClick(this.props)}
        role="listitem"
      >
        {/* icon for each musuem */}
        <img
          src={
            this.props.categories[0].icon.prefix +
            "32" +
            this.props.categories[0].icon.suffix
          }
          alt={this.props.categories[0].name}
        />
        {this.props.name}
      </li>
    );
  }
}

export default ListItem;
