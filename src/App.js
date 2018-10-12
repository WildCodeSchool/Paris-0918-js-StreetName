import React, { Component } from 'react';
import StreetName from './Street_Name'
import PanameStreet from './PanameStreet'
import './App.css';

class App extends Component {
  state = {
    streetname : undefined,
    streetstory : undefined
  }


  getStreetName = async (e) => {
    e.preventDefault()
    const input_rue = e.target.elements.rue.value
    const truc_api = await fetch(`https://opendata.paris.fr/api/records/1.0/search/?dataset=voiesactuellesparis2012&q=${input_rue}&facet=typvoie&facet=date_arret&facet=quartier&facet=arron`)
    const api_data = await truc_api.json()
    console.log(api_data)
    this.setState({
      streetstory: api_data.records[0].fields.histo,
      streetname: api_data.records[0].fields.nomvoie,
      arrondis: api_data.records[0].fields.arron
    })
  }
  render() {
    return (
      <div>
        <div className="background_img"></div>
        <div className="black_bg">
        <img src="http://hdqwalls.com/wallpapers/eiffel-tower-paris-city-autumn-4k-5k-n4.jpg" className="img_bg"/>
        <StreetName getStreetName={this.getStreetName} />
       <PanameStreet 
        streetstory={this.state.streetstory}
        streetname={this.state.streetname}
        arrondis={this.state.arrondis}
       />
        </div>
      
       
        
       
      </div>
    );
  }
}

export default App;
