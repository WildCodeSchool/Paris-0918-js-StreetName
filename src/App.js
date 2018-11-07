import React, { Component } from 'react';
import StreetName from './Street_Name'
import PanameStreet from './PanameStreet'
import './App.css';

class App extends Component {
  state = {
    streetname : undefined,
    streetstory : undefined,
    arrondis : 'init',
    error : false
  }


  getStreetName = async (e) => {
    e.preventDefault()
    const input_rue = e.target.elements.rue.value
    try {
    const truc_api = await fetch(`https://opendata.paris.fr/api/records/1.0/search/?dataset=voiesactuellesparis2012&q=${input_rue}&facet=typvoie&facet=date_arret&facet=quartier&facet=arron`)
    if(!truc_api.ok){
      this.setState({ error: true })
      throw Error(truc_api.statusText)
    }
    const api_data = await truc_api.json()
    console.log(api_data)
    this.setState({
      streetstory: api_data.records[0].fields.histo,
      streetname: api_data.records[0].fields.nomvoie,
      arrondis: api_data.records[0].fields.arron
    })
  } catch (error) {
    this.setState({ error: true})
  }
  }
  render() {
    return (
      <div>
        <div className="background_img"></div>
        
        <div className="black_bg">
        <img src={require(`./photo/Paris_${this.state.arrondis.split(',')[0]}.jpg`)} className="img_bg"/>
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
