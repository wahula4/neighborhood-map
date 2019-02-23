// https://github.com/tomchentw/react-google-maps
// https://developers.google.com/maps/documentation/javascript/tutorial
/* global google */ // access google maps api
import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      zoom={props.zoom}
      center={props.center} // center will be determined by the results of the search
      defaultCenter={{ lat: 40.7128, lng: 74.006 }}
    >
      {props.markers &&
        props.markers
          .filter(marker => marker.isVisible)
          .map((marker, index) => {
            //  returns the value of the first venue in the array that satisfies the provided test (matching marker id)
            const venueDetails = props.venues.find(
              venue => venue.id === marker.id
            );
            return (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => props.handleMarkerClick(marker)}
                animation={google.maps.Animation.DROP}
              >
                {marker.isOpen && (
                  <InfoWindow>
                    <div>
                      <h3>
                        <strong>
                          {venueDetails.name ? venueDetails.name : ""}
                        </strong>
                      </h3>
                      <p>
                        {venueDetails.location.address
                          ? venueDetails.location.address
                          : ""}
                      </p>
                      <p>
                        Rating:{" "}
                        {venueDetails.rating ? venueDetails.rating : "None"}
                      </p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            );
          })}
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    return (
      <MyMapComponent
        {...this.props}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAGcv4ZO3qy2_yQeyf65OhSydguc-gcTnk"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, width: "75%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
