import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  static propTypes = {
    handleListItemClick: PropTypes.func.isRequired
  };

  render() {
    const { categories, name, handleListItemClick } = this.props;

    return (
      // display each location name and run the handleListItemClick function on click
      <li
        className="listItem"
        // when a list item is clicked, open the marker info window on the map
        onClick={() => handleListItemClick(this.props)}
        role="listitem"
      >
        {/* icon for each location */}
        {categories[0].icon ? (
          <img
            src={categories[0].icon.prefix + "32" + categories[0].icon.suffix}
            alt={categories[0].name}
          />
        ) : (
          ""
        )}

        {name ? name : ""}
      </li>
    );
  }
}

export default ListItem;
