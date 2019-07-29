import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {DB_CONFIG} from './Config';


class List extends Component {
  constructor() {
    super()
    this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();

     // this.database = this.app.database().ref().child('apartments').child('0').child('price');


    this.state = {
      apartments: [],
      id : 0,
      latitude : 0,
      longitude : 0

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
          img: snap.val().imageUrl
      });
      this.setState({
          apartments: previousList
      });
  });
}
  render() {
    const img = {
      width: '20em',
      height: '20em'
    }


      const apartments = this.state.apartments.map(apartment =>
          <div>

              <h1>{apartment.id}</h1>
              <h1>{apartment.name}</h1>
              <h1>${apartment.price}</h1>
              <h1>{apartment.latitude}</h1>
              <h1>{apartment.longitude}</h1>
              <img src={apartment.img} style={img}></img>
          </div>
      );
      return (
          <div>{apartments}</div>
      );
  }
}

export default List;
