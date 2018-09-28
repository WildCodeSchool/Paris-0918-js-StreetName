import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import searchIcon from './baseline-search-24px.svg'
import Header from "./Header"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />


        <div className="searchB">
          <Grid container >

            <Grid item xs={3}>
            </Grid>

            <Grid item xs={5} className="searchBar">
              <Input placeholder="Search…" />
            </Grid>

            <Grid item xs={1} >
              <img src={searchIcon} className="App-logosearch" alt="logo" />
            </Grid>

          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
