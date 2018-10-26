import React from 'react';
import './App.css';

class PanameStreet extends React.Component{
    render(){
        return(
            <div className="panam_div">
               { this.props.streetstory &&  <div className="color_text"><h1> ORIGIN STORY TIME  </h1> <p> {this.props.streetstory} </p> </div>}
        {this.props.streetname && this.props.arrondis && <div className="color_text"> <h1>Nom de la rue</h1>  <p>{this.props.streetname.toUpperCase()}</p> <h1>Arrondissment</h1> <p>{this.props.arrondis.toUpperCase()}</p></div> }
            </div>
        );
    }
}
export default PanameStreet;