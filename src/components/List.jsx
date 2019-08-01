import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import ReactMapGL, {GeolocateControl,NavigationControl, Marker} from "react-map-gl";
import {DB_CONFIG} from './Config';
import Map from './Map.jsx';
import PropTypes from 'prop-types';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import {Link} from 'react-router-dom';

class List extends Component {
  constructor(props) {
    super(props)
    this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();

    this.state = {
      apartments: [],
      key : 0,
      selectedApt: null

    };
    this.handleChangingSelectedApartment = this.handleChangingSelectedApartment.bind(this);
  }

  handleClickSelectApartment(key) {
    const ref = firebase.database().ref('apartments').child(key).child('price');
    ref.on('value', snapshot => {
      this.setState({
        latitude: snapshot.val().lat,
        longitude: snapshot.val().lng,
      })
    })
    alert(this.state.apartments[key].latitude);
  }

  handleChangingSelectedApartment(key) {
        this.setState({selectedApt: key});
  }




  componentDidMount() {
    const rootRef = firebase.database().ref().child('apartments');
    rootRef.on('child_added', snap => {
      const previousList = this.state.apartments;
      previousList.push({
          key: snap.key,
          lat: snap.val().lat,
          long: snap.val().lng,
          name: snap.val().name,
          price: snap.val().price,
          sqft: snap.val().sqft,
          bed: snap.val().bedroom,
          bath: snap.val().bathroom,
          adress: snap.val().adress,
          img: snap.val().imageUrl
      });
      this.setState({
          apartments: previousList
      });
  });
}

  render() {
    const img = {
      width: '350px',
      height: '240px'
    }
    const boxApt = {
      border: '1px solid white',
      width: '350px',
      float: 'right',
      marginLeft:'1px',
      marginTop:'17%',
      height: 'auto'
    }
    const adress = {
      fontSize: '10px',
      fontWeight: 'bold'
    }
    const columns = {
      columnCount: '2',
      marginRight: '5%'
    }


      const apartments = this.state.apartments.map(apartment =>
          <div>
            <div
              style={boxApt}
              onClick={() => {this.handleClickSelectApartment(apartment.key);}}>
              <img src={apartment.img} style={img}></img>
              <h1>${apartment.price}/mo</h1>
              <p style={adress}>{apartment.adress}</p>
              <p><strong>{apartment.sqft}</strong> sqft | <strong>{apartment.bed}</strong> bed | <strong>{apartment.bath}</strong> bath</p>
            </div>
          </div>
      );
      const icon = {
        backgroundColor: 'black',
        border: '1px solid black',
        borderRadius:'50%',
        width:'15px',
        height:'15px'
      }
      const apt = this.state.apartments.map(apartment =>
            apartment.longitude
      );

      return (

          <div>
            <Navbar/>
            <Header>
            </Header>
              <Map

              onSelectionApt = {this.handleChangingSelectedApartment}
              selectedApt = {this.state.selectedApt}
              >
              {this.state.apartments.map(apt => (
                  <Marker
                    key={apt.key}
                    lat={apt.lat}
                    longitude={apt.long}
                    offsetLeft={-20}
                    offsetTop={-10}
                  >
                  <div style={icon}>here</div>
                </Marker>
              ))}
              </Map>

              <div
              style={columns}>
              {apartments}
              </div>
          </div>
      );
  }
}

export default List;
