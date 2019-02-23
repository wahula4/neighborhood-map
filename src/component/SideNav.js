// https://reactjs.org/docs/forms.html
// https://www.w3.org/WAI/tutorials/forms/labels/

import React, { Component } from "react";
import List from "./List";
import PropTypes from "prop-types";

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      venues: []
    };
  }

  static propTypes = {
    venues: PropTypes.array.isRequired,
    handleFilterVenues: PropTypes.func,
    handleChange: PropTypes.func,
    query: PropTypes.string
  };

  // filter the venues by name that match the search query
  handleFilterVenues = () => {
    if (this.state.query.trim() !== "") { // if query isn't blank
      const venues = this.props.venues.filter(venue =>
        venue.name.toLowerCase().includes(this.state.query.toLowerCase()) // if a venue name includes the query, return true and return matching venues
      );
      return venues;
    }
    return this.props.venues; // return all matching venues
  };

  handleChange = e => {
    this.setState({ query: e.target.value });

    // filter markers based on query based on matching ids
    const markers = this.props.venues.map(venue => {
      const matched = venue.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      const marker = this.props.markers.find(marker => marker.id === venue.id);
      if (matched) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.setState({ markers });
  };

  render() {
    return (
      <div className="sideNav">
        <label for="search">Filter Pizza Places</label>
        <input
          type="search"
          id="search"
          placeholder="Fuel"
          onChange={this.handleChange}
        />
        <List
          {...this.props}
          venues={this.handleFilterVenues()}
          handleListItemClick={this.props.handleListItemClick}
        />
      </div>
    );
  }
}

export default SideNav;
