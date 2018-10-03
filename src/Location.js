import React, { Component } from 'react';
import { PropTypes } from 'react'

class Location extends Component {
    state = {
        latitude: '48.845956',
        longitude: '2.354859',
        data: this.props.callbb
    };
    
    getPlace = async (lat, lng) => {
        try {
            const response = await fetch(`https://places-dsn.algolia.net/1/places/reverse?aroundLatLng=${lat},%20${lng}&hitsPerPage=1&language=fr`)
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json()
            //console.log(data.hits[0].locale_names);
            this.setState({ data: data.hits[0].locale_names });
        } catch (error) {
            console.log(error);
        }
        
        
    }
    ComponentDidMount() {
        this.getLocation();
        
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
        this.getPlace(this.state.latitude,this.state.longitude)
        
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

        
          
           

        
        function showEror(){console.log(Error)}
        
        return pos;
     };
     myLocation = this.getLocation();



    render() {    
        return (
          <div>

            <button type="button" onClick={this.getMyLocation}>Get Geolocation</button>
            <p>{this.state.latitude}</p>
            <p>{this.state.longitude}</p>
            

        
          </div>
        )


      
    }
}
export default Location;