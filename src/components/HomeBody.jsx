import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Img from '.././assets/img/home.jpg'

function Home() {

  const links = {
  width: '60em',
  height: '2em',
  border: '1px solid white',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: '1',
  marginTop:'0',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
  }

  const image = {
    marginTop: '5%',
    width: '100%',
    zIndex: '-1'
  }


  return (
    <div>
      <style jsx> {`
        #link:link {
            text-decoration: none;
          }
        #link {
          float: right;
          font-size: 20px;
          color: black;
        }

          `}
      </style>
      <div>
        <img
        style={image}
        src={Img} alt="Apartment Image"></img>
        <div
        style={links}>
        <Link id="link" to="/rental">Search</Link>
        </div>
      </div>

  </div>
  );
}

export default Home;
