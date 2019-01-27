import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import fourSquareAPI from './Api'


const mapStyles = {
  position: "absolute",
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {

  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
     // center: [],
      zoom: 12,
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}
    }
  }

  componentDidMount() {
    fourSquareAPI.search({
      near:"New York City, NY",
      limit: 20,
      categoryId: "4bf58dd8d48988d18f941735,4bf58dd8d48988d190941735,4bf58dd8d48988d191941735"
    }).then(results => {
      const { venues } = results.response;
      // const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          location: {lat: venue.location.lat, lng: venue.location.lng},
          name: venue.name,
          type: venue.categories[0].name,
          category: venue.categories[0].id
          // isOpen: false,
          // isVisible: true
        }
      });
      // this.setState({ venues: venues[0].name })
      // this.setState({center: results.response.geocode.feature.geometry})  
      this.setState({markers})
      console.log('marker info: ', this.state.markers)
      console.log('venues: ', venues)
    })
  }

  // state = {
  //   showingInfoWindow: false, //Hides or the shows the infoWindow
  //   activeMarker: {}, //Shows the active marker upon click
  //   selectedPlace: {}
  // };

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

    return (
      <Map
        google={this.props.google}
        zoom={this.state.zoom}
        style={mapStyles}
        initialCenter={{
          lat: 40.742352,
          lng: -74.006210
        }}
      >
        {this.state.markers &&
          this.state.markers.map((location, index) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                name={location.name}
                position={location.location}
                type={location.type}
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
            <h5>{this.state.selectedPlace.type}</h5>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_APIKEY
})(MapContainer);
