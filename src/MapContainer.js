import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  position: "absolute",
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    var locations = [
      {
        title: "Park Ave Penthouse",
        location: { lat: 40.7713024, lng: -73.9632393 }
      },
      {
        title: "Chelsea Loft",
        location: { lat: 40.7444883, lng: -73.9949465 }
      },
      {
        title: "Union Square Open Floor Plan",
        location: { lat: 40.7347062, lng: -73.9895759 }
      },
      {
        title: "East Village Hip Studio",
        location: { lat: 40.7281777, lng: -73.984377 }
      },
      {
        title: "TriBeCa Artsy Bachelor Pad",
        location: { lat: 40.7195264, lng: -74.0089934 }
      },
      {
        title: "Chinatown Homey Space",
        location: { lat: 40.7180628, lng: -73.9961237 }
      }
    ];

    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 40.742352,
          lng: -74.006210
        }}
      >
        {locations &&
          locations.map((location, index) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                name={location.title}
                position={location.location}
                key={index}
              />
            );
          })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAGcv4ZO3qy2_yQeyf65OhSydguc-gcTnk"
})(MapContainer);
