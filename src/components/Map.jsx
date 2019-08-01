import React, {Component}  from 'react';
import List from './List.jsx';
import ApartmentDetails from './ApartmentDetails.jsx';
import ReactMapGL, {GeolocateControl, Marker} from "react-map-gl";
import firebase from 'firebase';
import CSS from 'mapbox-gl/src/css/mapbox-gl.css';
import PropTypes from 'prop-types';
import {DB_CONFIG} from './Config';
const TOKEN = 'pk.eyJ1Ijoic2FicmluYW1pYW5uZSIsImEiOiJjanluZW03bGswdDVoM2NteWxyb2V5YXB6In0.nKJ9ChU5Otb3j3pwTQ9mxA';



class Map extends Component {
constructor(props) {
  super(props);
  this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
  this.state = {
    apartments: [],
    viewport: {
      width: 1100,
      height: 1500,
      latitude: 47.608013,
      longitude:  -122.335167,
      zoom: 13,
      optionalSelectedApt: null
    }
  };
}



componentDidMount() {
  const rootRef = firebase.database().ref().child('apartments');
  rootRef.on('child_added', snap => {
    const previousList = this.state.apartments;
    previousList.push({
        key: snap.key,
        latitude: snap.val().lat,
        longitude: snap.val().lng,
        name: snap.val().name,
        price: snap.val().price,

    });
    this.setState({
        apartments: previousList
    });
  });
}

  getLong() {
    const apt = this.state.apartments.map(apartment =>
    [apartment.longitude]);
    return apt;
}

getLat() {
  const apt = this.state.apartments.map(apartment =>
  [apartment.latitude]);
  return apt;
}



  render() {
    if (this.props.selectedApt != null){
      this.state.optionalSelectedApt = <ApartmentDetails selectedApt={this.props.apt[this.props.selectedApt]}/>;
      }
    const map = {
      marginLeft: '2%',
      float: 'left',
      marginTop: '2px'
    }

    const apt = this.state.apartments.map(apartment =>
          <div>
          <p><strong>{apartment.longitude}</strong></p>
        </div>
    );

    return (
    <div>
      <p></p>
      <ReactMapGL
        style={map}
        mapStyle ="mapbox://styles/sabrinamianne/cjynf4zkn3o2a1dnwt2ufju7f"
        mapboxApiAccessToken={TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
      <GeolocateControl
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
      />
    
      </ReactMapGL>
    </div>
    );
  }
}


Map.propTypes = {
  selectedApt: PropTypes.object,
  onSelectionApt: PropTypes.func
};

export default Map;
