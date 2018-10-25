import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import logo from './317354-200.png';

import './Header.css';


class Header extends Component {
    render() {
        return (
            <header className="Style-Header">
                <Grid container >

                    <Grid item xs={2}>
                        <img src={logo} className="Style-logo" alt="logo" />
                    </Grid>

                    <Grid item xs={8}>
                        <h1 className="Style-title">StreetName Paris</h1>
                        <h1 className="Style-soustitle">Ta rue a une histoire</h1> 
                    </Grid>

                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </header>
        );
    }
}

export default Header;
