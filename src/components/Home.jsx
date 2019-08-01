import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import HomeBody from './HomeBody.jsx';
import Header from './Header.jsx';

function Home() {
  const img = {
    width: '60em',
    height: '10em'
  }

  return (
    <div>
      <Navbar
        style={img}/>
      <hr/>
      <HomeBody/>
    </div>
  );
}

export default Home;
