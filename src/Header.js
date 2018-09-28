import React, { Component } from 'react';
import logo from './logo.svg';


class Header extends Component {
    render() {
        return (

            <div className="App">
                <header className="App-header">
               <a href="#" className="header-title">Street Name</a>
                    <div className="logo-style">
                    <img src={logo} className="App-logo" alt="logo" />
                    </div>
                   



                </header>

            </div>




        );

    }

}

export default Header;