import React, { Component } from 'react';
import "./App.css";
//import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

import AlgoliaPlacess from './AlgoliaPlacess';



class Search extends Component {

    state = {
        latitude: '48.845956',
        longitude: '2.354859',
        datas: ''
      };
    
    
    ComponentDidMount() {
        const pos = {};
        const geolocation = window.navigator.geolocation;
        let latitude = null;
        let longitude = null;
        if (geolocation) {
           geolocation.getCurrentPosition( (position) =>{
            this.setState({latitude : position.coords.latitude,
            longitude : position.coords.longitude
                       })
                    }
                )
        }


    

        
    }
    getMyLocation = (e) => {
        let location = null;
        let latitude = null;
        let longitude = null;
        if (window.navigator && window.navigator.geolocation) {
            location = window.navigator.geolocation
        }
        if (location) {
            location.getCurrentPosition( (position) =>{
                this.setState({latitude : position.coords.latitude,
                longitude : position.coords.longitude
                           })
                        }
                    )}

        console.log('OK')
        //this.getPlace(e,this.state.latitude,this.state.longitude)
        //console.log(this.state.datas);

      
        
    }
    getLocation = (e) =>{
        const pos = {};
        const geolocation = window.navigator.geolocation;
        let latitude = null;
        let longitude = null;
        if (geolocation) {
           geolocation.getCurrentPosition(function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            console.log(latitude);
            console.log(longitude);
            pos.lat = latitude;
            pos.lng = longitude;
        })
        }

        const getPlace = async (lat, lng) => {
            try {
    
                const response = await fetch(`https://places-dsn.algolia.net/1/places/reverse?aroundLatLng=${lat},%20${lng}&hitsPerPage=1&language=fr`)
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                const data = await response.json()
                console.log(data.hits[0].locale_names);
                this.setState({ datas: data.hits[0].locale_names });
                
            } catch (error) {
                console.log(error);
            }
            
            
        }
        getPlace(this.state.latitude,this.state.longitude)
        
          
           

        
        function showEror(){console.log(Error)}
        
        return pos;
     };
     myLocation = this.getLocation();

  render() {

    return (
    
<div>
 <button type="button" name="geoloc" type="submit" onClick={this.getLocation}>Get Geolocation</button>
            
            <AlgoliaPlacess
    container= 'id_city'
    valeur={this.state.datas}
      placeholder='Nom de ta rue ...'
 
      options={{
        appId: 'plRZBW9D9AP1',
        apiKey: '412709398690b7300f440d212a96dee4',
        language: 'fr',
        countries: ['fr'],
        type: 'address',
        insideBoundingBox:  "48.896, 2.394, 48.84, 2.25",
        useDeviceLocation: true,
        aroundLatLng: false,
        aroundRadius: 1,
        aroundLatLngViaIP: true
        // Other options from https://community.algolia.com/places/documentation.html#options
      }}
 
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => 
        console.log('Rue sélectionné : ' + suggestion.name)}
 
      onSuggestions={({ rawAnswer, query, suggestions }) => 
        console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}
 
      onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
        console.log('Fired when arrows keys are used to navigate suggestions.')}
 
      onClear={() => 
        console.log('Fired when the input is cleared.')}
 
      onLimit={({ message }) => 
        console.log('Fired when you reached your current rate limit.')}
 
      onError={({ message }) => 
        console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
     />

  

</div>
      
    );
  }
}

export default Search;