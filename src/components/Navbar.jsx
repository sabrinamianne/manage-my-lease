import React from 'react';
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom';


function Home() {
  const nav = {
    width: '100%',
    height: '50px',
    backgroundColor: 'white',
    display : 'inline-flex',
    fontSize: '18px',
    marginTop: '2em',
  }
  const space1 = {
    marginRight: '4%',
    marginLeft: '18%'
  }
  const space= {
    marginRight: '3%'
  }

  const right= {
    float: 'right',
    marginLeft: '25%',
  }
  const right2= {
    float: 'right',
    marginLeft: '4%'
  }

  const logO = {
    marginLeft: '42%',
    height: '240px',
    position: 'absolute',
  }

  return (
    <div style={nav}>
      <style jsx> {`
        #link:link {
            text-decoration: none;
          }
        #link {

          float: right;
          font-size: 18px;
          color: black;
        }

          `}
      </style>
      <p style={space1}><Link id="link" to="/">Home</Link></p>
      <p style={space}><Link id="link" to="/rental">Rent</Link></p>
      <p style={space}>List your rental</p>
      <img src={logo} style={logO}></img>
      <p style={right}>Help</p>
      <p style={right2}>Sign in or Join </p>
      <p style={right2}>Admin</p>
    </div>
  );
}

export default Home;
