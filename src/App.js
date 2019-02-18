import React, { Component } from "react";
import GoogleMap from "./component/Map";
import fourSquareAPI from "./Api";
import SideNav from "./component/SideNav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: {},
      zoom: 12,
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {},
      value: "",
      art: [],
      history: [],
      science: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    // promise
    fourSquareAPI
      .search({
        // TODO allow user to input a city
        near: "New York, NY",
        limit: 20,
        categoryId:
          "4bf58dd8d48988d18f941735,4bf58dd8d48988d190941735,4bf58dd8d48988d191941735"
      })
      .then(results => {
        const { venues } = results.response;
        // center the map based on the marker locations
        const { center } = results.response.geocode.feature.geometry;
        const markers = venues.map(venue => {
          return {
            lat: venue.location.lat,
            lng: venue.location.lng,
            location: { lat: venue.location.lat, lng: venue.location.lng },
            name: venue.name,
            type: venue.categories[0].name,
            category: venue.categories[0].id,
            id: venue.id
          };
        });
        this.setState({ venues, center, markers });
        console.log("marker info: ", this.state.markers);
        const art = venues.filter(
          x => x.categories[0].id === "4bf58dd8d48988d18f941735"
        );
        const history = venues.filter(
          x => x.categories[0].id === "4bf58dd8d48988d190941735"
        );
        const science = venues.filter(
          x => x.categories[0].id === "4bf58dd8d48988d191941735"
        );
        this.setState({ art, history, science });
      });
  }

  // open infowindow on marker click
  onMarkerClick = (props, marker, e) => {
    console.log("click");
    this.setState(
      {
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      },
      () => console.log("showing details")
    );
  };

  // when a musuem is clicked in the side nav, open info window
  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.onMarkerClick(marker);
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // use dropdown to filter museums by art, science, or history
  handleChange(event) {
    if (event.target.value === "4bf58dd8d48988d18f941735") {
      this.setState(
        {
          value: event.target.value,
          venues: this.state.art,
          markers: this.state.venues.map(venue => {
            return {
              lat: venue.location.lat,
              lng: venue.location.lng,
              location: { lat: venue.location.lat, lng: venue.location.lng },
              name: venue.name,
              type: venue.categories[0].name,
              category: venue.categories[0].id,
              id: venue.id
            };
          })
        },
        () => {
          console.log("art", this.state.value);
        }
      );
    } else if (event.target.value === "4bf58dd8d48988d190941735") {
      this.setState(
        {
          value: event.target.value,
          venues: this.state.history,
          markers: this.state.venues.map(venue => {
            return {
              lat: venue.location.lat,
              lng: venue.location.lng,
              location: { lat: venue.location.lat, lng: venue.location.lng },
              name: venue.name,
              type: venue.categories[0].name,
              category: venue.categories[0].id,
              id: venue.id
            };
          })
        },
        () => {
          console.log("history", this.state.value);
        }
      );
    } else if (event.target.value === "4bf58dd8d48988d191941735") {
      this.setState(
        {
          value: event.target.value,
          venues: this.state.science,
          markers: this.state.venues.map(venue => {
            return {
              lat: venue.location.lat,
              lng: venue.location.lng,
              location: { lat: venue.location.lat, lng: venue.location.lng },
              name: venue.name,
              type: venue.categories[0].name,
              category: venue.categories[0].id,
              id: venue.id
            };
          })
        },
        () => {
          console.log("science", this.state.value);
        }
      );
    }
  }

  render() {
    return (
      <div className="App">
        <SideNav
          {...this.state}
          handleListItemClick={this.handleListItemClick}
          handleChange={this.handleChange}
        />
        <GoogleMap
          {...this.state}
          onMarkerClick={this.onMarkerClick}
          onClose={this.onClose}
          handleListItemClick={this.handleListItemClick}
        />
      </div>
    );
  }
}

export default App;
