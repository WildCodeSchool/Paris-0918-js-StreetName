import React, { Component } from 'react'
import Search from './Search'
import './App.css'
import Header from './Header/Header'
import Background from "./background/background";



class App extends Component {
  state = {}

photo = () => {
  const arr = Object.keys(Background);
  const randomarr = arr[Math.floor(Math.random()*arr.length)];
  this.setState(Background[randomarr]);
}


  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <img src={this.state.image} className="bg_img"></img>
        <br/>
        <button onClick={test => this.photo(test)}>change de BG avec ce bouton :D</button>
      </div>
    );
  }
}

export default App;
