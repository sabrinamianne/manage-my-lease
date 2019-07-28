import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import CSS from 'mapbox-gl/src/css/mapbox-gl.css';

const TOKEN = 'pk.eyJ1Ijoic2FicmluYW1pYW5uZSIsImEiOiJjanluZW03bGswdDVoM2NteWxyb2V5YXB6In0.nKJ9ChU5Otb3j3pwTQ9mxA';

class Map extends Component {
constructor(props) {
  super(props);
  this.state = {
    viewport: {
      width: 1200,
      height: 1000,
      latitude: 47.608013,
      longitude:  -122.335167,
      zoom: 13
    }
  };

}

  render() {

    return (
      <ReactMapGL
        mapStyle ="mapbox://styles/sabrinamianne/cjynf4zkn3o2a1dnwt2ufju7f"
        mapboxApiAccessToken={TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default Map;
