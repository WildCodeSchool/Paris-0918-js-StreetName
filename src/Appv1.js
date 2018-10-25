import React, { Component } from 'react';
import './App.css';

import { AppBar, Toolbar, Typography, Grid, Button, Icon } from '@material-ui/core';


import Buttongeolocalisation from './Components/buttongeolocalisation';
import Testpopover from './Components/testpopover';
import Footer from './Components/footer';
import Header from './Components/header';



class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Grid container> */}
        <div className="bgimg">

          <Header />
          
          {/* <Grid item direction="row" justify="flex-end" alignItems="flex-end"> */}
            <Buttongeolocalisation />
           {/* </Grid> */}
          
          {/* <Grid item  alignItems="flex-end"> */}

          
           {/* </Grid> */}
        </div>
        <Footer />
        {/* </Grid> */}
       
        
       
      </div>
    );
  }
}

export default App;
