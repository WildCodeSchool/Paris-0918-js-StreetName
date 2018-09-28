import React,{ Component } from "react";
import Grid from '@material-ui/core/Grid';
import logo from './317354-200.png';
import logoMap from './baseline-map-24px.svg'
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Grid container >

                    <Grid item xs={2}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>

                    <Grid item xs={8}>
                        <h1 className="App-title">StreetName Paris</h1>
                        <h1 className="App-soustitle">Ta rue a une histoire</h1>
                    </Grid>

                    <Grid item xs={2}>
                        <img src={logoMap} className="App-logomap" alt="logo" />
                    </Grid>

                </Grid>
            </header>
        );
    }
}

export default Header;