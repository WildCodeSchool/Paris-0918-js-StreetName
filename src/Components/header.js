import React, { Component } from 'react';
import './header.css'

import { AppBar, Toolbar, Typography, Grid, Button, Icon } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';


class Header extends Component {
  render() {
    return (

      <div className="headerstreetname">

        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <Grid container className="logofirst" >

              <Grid item xs={1} justify="flex-start">
                <Button variant="fab" mini color="secondary" aria-label="Add" >
                  <MapIcon />
                </Button>
              </Grid>
              <Grid item xs={10} justify="flex-end">
                <Typography color="inherit" variant="h5" className="textetitre" >
                  StreetName Paris</Typography>
              </Grid>
              <Grid item xs={1} justify="flex-end">
                <Button variant="fab" mini color="secondary" aria-label="Add" >
                  <MapIcon />
                </Button>
               </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

export default Header;