import React, { Component } from 'react';
import './searchBar.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Search from '@material-ui/icons/Search';



class Searchbar extends Component {
    render () {
        return (
            <div >
           
           <div className="search">
        <Grid container justify="center" alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Nom de rue"  />
          </Grid>
        </Grid>
      </div>

          </div>
         )
    }
    
}
export default Searchbar;
