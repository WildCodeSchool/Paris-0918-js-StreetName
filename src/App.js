import React, { Component } from 'react';
import "./App.css";
//import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Searchbar from './Searchbar'

import * as Nominatim from 'nominatim-browser';

class App extends Component {
  render() {
    return (
      /*
      <BrowserRouter>
      <div>
            <NavLink to="/"> Accueil </NavLink>
          
      <div>
            <NavLink to="/header"> Header </NavLink>
      </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/header" component={Header} />
        </Switch>
        </div>
      </BrowserRouter>*/
<div>

  <Header/>

  <Searchbar/>


</div>
      
    );
  }
}

export default App;
