import React, { Component } from "react";
import "./App.css";
import AlgoliaPlaces from "./AlgoliaPlaces";
import DescriptionStory from "./DescriptionStory/DescriptionStory";


class Search extends Component {
  state = {
    latitude: "",
    longitude: "",
    geolocplacename: "",
    streetstory: "",
    streetname: "",
    error: false
  };

  getStreetHistory = async e => {
    const input_rue = e.suggestion.name;
    try {
      const response = await fetch(
        `https://opendata.paris.fr/api/records/1.0/search/?dataset=voiesactuellesparis2012&q=${input_rue}&facet=typvoie&facet=date_arret&facet=quartier&facet=arron`
      );
      
      if (!response.ok) { // dans le cas où la requete api échoue, afficher une erreur
        this.setState({ error: true });
        throw Error(response.statusText);
      }

      const api_data = await response.json();
      this.setState({
        streetstory: api_data.records[0].fields.histo,
        streetname: api_data.records[0].fields.nomvoie,
        error: false
      });
    } 
    catch (error) {
      this.setState({ error: true });
    }
  };
  
  getPlace = async (lat, lng) => { // interroge une API pour faire correspondre les coordonées à un nom d'endroit
    try {
      const response = await fetch(
        `https://places-dsn.algolia.net/1/places/reverse?aroundLatLng=${lat},%20${lng}&hitsPerPage=1&language=fr`
      );

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const data = await response.json();
      this.setState({ geolocplacename: data.hits[0].locale_names });
    } 
    catch (error) {
      console.log(error);
    }
  };

  getLocation = e => {
    let geolocation = null;
   
    if (window.navigator && window.navigator.geolocation) { // essaye de récuperer les coordonnées géo depuis le navigateur
      geolocation = window.navigator.geolocation;
    }

    if (geolocation) { // les coordonées sont accessibles, on les stocke dans le state
      geolocation.getCurrentPosition(position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

        if (this.state.latitude !== "" && this.state.longitude !== "") {
          this.getPlace(this.state.latitude, this.state.longitude);
        }

      });
    }
  };

  render() {
    return (
      <div>
        <button type="button" className="geoloc" onClick={this.getLocation}>
          Locate Me !
        </button>

        <AlgoliaPlaces
          valeur={this.state.geolocplacename}
          placeholder="Nom de ta rue ..."
          options={{
            appId: "plRZBW9D9AP1",
            apiKey: "412709398690b7300f440d212a96dee4",
            language: "fr",
            countries: ["fr"],
            type: "address",
            insideBoundingBox: "48.896, 2.394, 48.84, 2.25",
            useDeviceLocation: false,
            aroundLatLngViaIP: false
            // Other options from https://community.algolia.com/places/documentation.html#options
          }}
          onChange={({
            query,
            rawAnswer,
            suggestion,
            suggestionIndex,
            rueSelection
          }) => {
            this.getStreetHistory({
              query,
              rawAnswer,
              suggestion,
              suggestionIndex,
              rueSelection
            });
          }}
        />

        <DescriptionStory
          streetstory={this.state.streetstory}
          streetname={this.state.streetname}
          error={this.state.error}
        />
        
      </div>
    );
  }
}

export default Search;
