import React, { Component } from 'react';
import './App.css';
import Buttongeolocalisation from './Components/buttongeolocalisation';
import Footer from './Components/footer';
import Header from './Components/header';
import Searchbar from './Components/searchBar';



class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
        <div className="bgimg">
          <Header />
              <Searchbar />
            <div className="locolisationRight">
              <Buttongeolocalisation />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
