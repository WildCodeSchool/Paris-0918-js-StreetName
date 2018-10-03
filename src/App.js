import React, { Component } from 'react';
import "./App.css";
//import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Search from './Search'
import Location from './Location'

import * as Nominatim from 'nominatim-browser';

let value =''
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
  <Search/>


</div>
      
    );
  }
}

export default App;
