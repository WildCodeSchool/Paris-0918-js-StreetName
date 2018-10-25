import React from "react";
import logoMap from '../Header/baseline-map-24px.svg';
import { Link } from "react-router-dom";

class DisplayMap extends React.Component {

    render(){
        return(
        <div>
            <Link to={"/map/" + this.props.latlng}><img src={logoMap}/></Link>
        </div>

        );
    }
}

export default DisplayMap;