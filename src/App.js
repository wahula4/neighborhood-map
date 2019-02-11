import React, { Component } from 'react';
import GoogleMap from "./component/Map";
import fourSquareAPI from "./Api";
import SideNav from './component/SideNav';
import './App.css'

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
      updateSuperState: obj => {
        this.setState(obj);
      },
      value: 'All'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // promise
    fourSquareAPI.search({
      near:"New York City, NY",
      limit: 20,
      categoryId: "4bf58dd8d48988d18f941735,4bf58dd8d48988d190941735,4bf58dd8d48988d191941735"
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          location: {lat: venue.location.lat, lng: venue.location.lng},
          name: venue.name,
          type: venue.categories[0].name,
          category: venue.categories[0].id,
          id: venue.id,
        }
      });
      this.setState({markers, venues, center})
      console.log('marker info: ', this.state.markers)
    })
  }

  onMarkerClick = (props, marker, e) => {
    console.log('click')
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  // TODO marker on map must be clicked before sidebar click opens infowindow
  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.onMarkerClick(marker)
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // ATTEMPTING TO FILTER MUSEUMS BASED ON THE STATE OF THE TARGET VALUE
  handleChange(event) {
    // this.setState({value: event.target.value});
    if ( event.target.value === "All") {
      this.setState({value: "All"})
    }
    else if(event.target.value === "4bf58dd8d48988d18f941735") {
      this.setState({value: event.target.value})
      console.log(this.props.value)
    } 
    else if(event.target.value === "4bf58dd8d48988d190941735") {
      this.setState({value: event.target.value})
      console.log(this.props.value)
    } 
    else if(event.target.value === "4bf58dd8d48988d191941735") {
      this.setState({value: event.target.value})
      console.log(this.props.value)
    } 
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
      <SideNav {...this.state}
                handleListItemClick={this.handleListItemClick}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
      />
      <GoogleMap {...this.state}
                  onMarkerClick={this.onMarkerClick}
                  onClose={this.onClose}
                  handleListItemClick={this.handleListItemClick}
      />
      </div>
    );
  }
}

export default App;
 