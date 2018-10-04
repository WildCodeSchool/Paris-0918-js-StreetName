import React, { Component } from 'react'
import Search from './Search'
import './App.css'
import Header from './Header/Header'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Search />

      </div>
    );
  }
}

export default App;
