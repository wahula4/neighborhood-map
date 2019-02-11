import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  position: "absolute",
  width: "75%",
  height: "100%"
};

export class GoogleMap extends Component {

  render() {
    return (
      <Map
        {...this.props}
        google={this.props.google}
        zoom={this.props.zoom}
        style={mapStyles}
        center={this.props.center}
      >
        {this.props.markers &&
          this.props.markers.map((location, index) => {
            return (
              <Marker
                onClick={this.props.onMarkerClick}
                name={location.name}
                position={location.location}
                type={location.type}
                id={location.id}
                key={index}
              />
            );
          })}
        <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}
          onClose={this.props.onClose}
        >
          <div>
            <h4>{this.props.selectedPlace.name}</h4>
            <h5>{this.props.selectedPlace.type}</h5>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAGcv4ZO3qy2_yQeyf65OhSydguc-gcTnk"
})(GoogleMap);
