import React from 'react'
import { Map, TileLayer,Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class SimpleExample extends React.Component {

  state={
    latlng: this.props.match.params.latlng, //|| 48.866667,
    zoom: 15
  }

  goBack = () => {
    this.props.history.goBack()
  }
  render() {

    const position = this.state.latlng.split(',');
    if (this.state.latlng){
    return (
        <div className="map">
      <Map center={position} style={{width: '80%', height: '400px'}} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} className="map__reactleaflet">

        </Marker>
      </Map>

      <button onClick={this.goBack}>Go back</button>
      </div>
    );} else {return (<div></div>)}
  }
}
