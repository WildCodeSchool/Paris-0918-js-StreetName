import React, { Component } from 'react';
import './buttongeolocalisation.css';

import { Button } from '@material-ui/core';
import MyLocation from '@material-ui/icons/MyLocation';

import { withStyles } from '@material-ui/core/styles';


const stylesH1 = withStyles => ({
    colorboutton: {
        backgroundColor: '#5177F6',
        height: '80px',
        width: '80px'
    },
    coloricon: {
        color: 'white',
        height: '35px',
        width: '35px',
    }
});


class Buttongeolocalisation extends Component {
    render() {
        return (
            <div >
                <Button className="buttonlocaloca" className={this.props.classes.colorboutton} variant="fab" aria-label="Add" >
                    <MyLocation className="stylebuttongeo" className={this.props.classes.coloricon} />
                </Button>
            </div>
        )
    }

}
export default withStyles(stylesH1)(Buttongeolocalisation);
