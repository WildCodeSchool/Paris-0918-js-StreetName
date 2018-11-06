import React, { Component } from 'react';
import './buttongeolocalisation.css';

import { Button } from '@material-ui/core';
import MyLocation from '@material-ui/icons/MyLocation';

import { withStyles } from '@material-ui/core/styles';


const stylesH1 = withStyles => ({
    colorboutton: {
        backgroundColor: '#000000',
        height: '50px',
        width: '50px'
    },
    coloricon: {
        color: 'white',
        height: '20px',
        width: '20px'
    },

   
});


class Buttongeolocalisation extends Component {
    
    render() {
        return (
            <div >
                <Button id="loco" className={this.props.classes.colorboutton} variant="fab" aria-label="Add" onClick={this.setState.colorboutton}>
                    <MyLocation className={this.props.classes.coloricon} />
                </Button>
            </div>
        )
    }

}
export default withStyles(stylesH1)(Buttongeolocalisation);
