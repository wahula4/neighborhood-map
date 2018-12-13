import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  position: "absolute",
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}
  }

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
        zoom={12}
        style={mapStyles}
        center={{
          lat: 39.7527,
          lng: -105.0017,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Union Station'}
          position={{lat: 39.7527, lng: -105.0017}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'pepsi center'}
          position={{lat: 39.7487, lng: -105.0077}}
          />
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
  apiKey: 'AIzaSyAGcv4ZO3qy2_yQeyf65OhSydguc-gcTnk'
})(MapContainer);