/* global google */

import React, { Component } from "react";
import Map from "./component/Map";
import fourSquareAPI from "./Api";
import SideNav from "./component/SideNav";
import "./App.css";
import PropTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 13
    };
  }

  static propTypes = {
    venues: PropTypes.array,
    handleFilterVenues: PropTypes.func,
    handleMarkerClick: PropTypes.func,
    handleListItemClick: PropTypes.func,
    closeAllMarkers: PropTypes.func,
    getVenueDetails: PropTypes.func,
    center: PropTypes.array,
    markers: PropTypes.array,
    zoom: PropTypes.number
  };

  handleMarkerClick = marker => {
    this.closeAllMarkers(); // after a marker is clicked, close any open markers and open the clicked marker
    marker.isOpen = true;
    this.setState({ markers: Object.assign(this.state.markers, marker) });
    const venue = this.state.venues.find(venue => venue.id === marker.id);

    fourSquareAPI.getVenueDetails(marker.id).then(res => {
      console.log("details", res);
      // use object.assign to add the new venue details to the venue to be displayed in the infowindow (target, source)
      const newVenue = Object.assign(venue, res.response.venue);
      console.log("new venue", newVenue);
      this.setState({ venues: Object.assign(this.state.venues, newVenue) });
    }).catch(error => console.log(error) );
  };

  // give clicking a list item the same functionality as clicking a marker on the map
  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
    console.log(venue);
  };

  // close all info windows
  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  };

  componentDidMount() {
    //   // promise
    fourSquareAPI
      .search({
        // TODO allow user to input a city
        near: "Charlotte, NC",
        limit: 25,
        query: "pizza"
      })
      .then(results => {
        console.log("results", results);
        const { venues } = results.response;
        const { center } = results.response.geocode.feature.geometry;
        const markers = venues.map(venue => {
          return {
            lat: venue.location.lat,
            lng: venue.location.lng,
            isOpen: false,
            isVisible: true,
            id: venue.id,
            rating: venue.rating
          };
        });
        this.setState({ venues, center, markers });
      });
  }

  render() {
    return (
      <div className="App">
        <SideNav
          {...this.state}
          handleListItemClick={this.handleListItemClick}
        />
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />
      </div>
    );
  }
}

export default App;
