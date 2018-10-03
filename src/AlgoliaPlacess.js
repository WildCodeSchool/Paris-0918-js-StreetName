import React, { Component } from 'react';
import PropTypes from 'prop-types';
import place from 'places.js';

class AlgoliaPlacess extends Component {

  componentDidMount() {
        
    let options = {
      container: this.autoCompletePlace,
      language: this.props.language,
      useDeviceLocation: this.props.useDeviceLocation,
            
    };
        
    const optionnalPropsKeys = ['type', 'countries', 'aroundLatLng', 'aroundRadius', 'insideBoundingBox', 'templates', 'appId', 'apiKey', 'apiKey'];
        
    for (let optionnalPropKey of optionnalPropsKeys) {
      if (this.props[optionnalPropKey]) { options[optionnalPropKey] = this.props[optionnalPropKey];}
    }
        
    this.autocomplete = place(options);
    const geol = document.querySelector('button')
    geol.addEventListener("click",(event)=>{
      this.autocomplete.setVal(this.props.valeur)
      this.autocomplete.open()
    })
    this.autocomplete.on('change', (e) => {this.props.onChange(e)
    
    });
  
  }
    
  render() {
    return (
      <input
        disabled={this.props.disabled}
        ref={(input) => {this.autoCompletePlace = input;}
        
    }
    
      />

    );
  }
}

AlgoliaPlacess.propTypes = {
  apiKey: PropTypes.string,
  appId: PropTypes.string,
  aroundLatLng: PropTypes.string,
  aroundRadius: PropTypes.number,
  insideBoundingBox: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  language: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  templates: PropTypes.object,
  type: PropTypes.oneOf(['city', 'country', 'address', 'busStop', 'trainStation', 'townhall', 'airport']),
  useDeviceLocation: PropTypes.bool,
};

AlgoliaPlacess.defaultProps = {
  disabled: false,
  language: navigator.language,
  useDeviceLocation: false,
  onChange: (e) => {console.log(e)},

    
};

export default AlgoliaPlacess;