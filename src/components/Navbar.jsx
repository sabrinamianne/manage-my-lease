import React from 'react';
import logo from '../assets/img/logo.png';

function Home() {
  const nav = {
    width: '100%',
    backgroundColor: 'white',
    display : 'inline-flex',
    fontSize: '18px',
    marginTop: '1%'
  }
  const space1 = {
    marginRight: '3%',
    marginLeft: '15%'
  }
  const space= {
    marginRight: '3%'
  }

  const right= {
    float: 'right',
    marginLeft: '20%',
  }
  const right2= {
    float: 'right',
    marginLeft: '4%'
  }

  const logO= {
    marginLeft: '13%',
    height: '70px'
  }

  return (
    <div style={nav}>
      <p style={space1}>Home</p>
      <p style={space}>Rent </p>
      <p style={space}>List your rental</p>
      <img src={logo} style={logO}></img>
      <p style={right}>Help</p>
      <p style={right2}>Sign in or Join </p>
      <p style={right2}>Admin</p>
    </div>
  );
}

export default Home;
