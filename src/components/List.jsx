import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {DB_CONFIG} from './Config';
import Map from './Map.jsx';

class List extends Component {
  constructor() {
    super()
    this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();

    this.state = {
      apartments: [],
      id : 0,


    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('apartments');
    rootRef.on('child_added', snap => {
      const previousList = this.state.apartments;
      previousList.push({
          id: snap.key,
          latitude: snap.val().lat,
          longitude: snap.val().lng,
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
      width: '21em',
      height: '20em'
    }
    const boxApt = {
      border: '1px solid white',
      width: '300px',
      marginRight: '5em',
      float: 'right',
      height: 'auto'
    }
    const adress = {
      fontSize: '10px',
      fontWeight: 'bold'
    }


      const apartments = this.state.apartments.map(apartment =>
          <div>
            <div style={boxApt}>
              <img src={apartment.img} style={img}></img>
              <h1>${apartment.price}/mo</h1>
              <p style={adress}>{apartment.adress}</p>
              <p><strong>{apartment.sqft}</strong> sqft | <strong>{apartment.bed}</strong> bed | <strong>{apartment.bath}</strong> bath</p>

            </div>
          </div>
      );
      return (

          <div className="app">
              <Map/>
              {apartments}
          </div>
      );
  }
}

export default List;
