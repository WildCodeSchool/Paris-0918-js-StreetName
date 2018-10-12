import React from 'react';
import './App.css';

class StreetName extends React.Component{
    render(){
        return(

           <form onSubmit={this.props.getStreetName}>
               <input type="text" name="rue" placeholder="Search..." autocomplete="off" className="input_design"/>
               
           </form>
       
        );
    }
}

export default StreetName;