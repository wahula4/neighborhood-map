import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 40.7413549,
          lng: -73.9980244
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAGcv4ZO3qy2_yQeyf65OhSydguc-gcTnk'
})(MapContainer);