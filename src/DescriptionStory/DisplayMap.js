import React from "react";
import logoMap from '../Header/baseline-map-24px.svg';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

import MapIcon from '@material-ui/icons/Map';

class DisplayMap extends React.Component {

    render(){
        return(
        <div>
            <Link to={"/map/" + this.props.latlng}><Button variant="fab" mini color="primary" aria-label="Add" >
                  <MapIcon /> </Button>
                </Link>
        </div>
        
        );
    }
}

export default DisplayMap;