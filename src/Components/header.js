import React, { Component } from 'react';
import './header.css'
import logo from '../Header/317354-200.png';
import { Link } from "react-router-dom";


import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';



class Header extends Component {
  render() {
    return (

      <div className="headerstreetname">

        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <Grid container >
              <Grid item xs={1} justify="flex-start">
                <Link to="/">
                  <img src={logo} className="Style-logo" alt="logo" />
                </Link>
              </Grid>
              <Grid item xs={10} justify="flex-end">
                <Typography color="inherit" variant="h6" className="textetitre" >
                  StreetName Paris</Typography>
              </Grid>
              <Grid item xs={1} justify="flex-end">

              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

export default Header;