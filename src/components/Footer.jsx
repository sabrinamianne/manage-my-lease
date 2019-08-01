import React from 'react';
import logo from '../assets/img/logo.png';


function Footer() {

  const footer = {
    border: '1px solid #edf6ff',
    backgroundColor: '#edf6ff',
    width: '100%',
    height: '20em',
    position: 'absolute',
    paddingBottom: '0',
    zIndex: '1',
    color: 'black',
    marginTop: '5%'
  }
   const imgLogo = {
     float: 'left',
     marginLeft: '5%',
     width: '20em',
     heigth: '20em'
   }


  return (
    <div style={footer}>
      <style jsx> {`
          #email:link {
            text-decoration: none;
            color: black;
            float: right;
            margin-right: 3%;
            margin-left: 1%;
            margin-top: 5%;
          }
          `}
      </style>
      <img style={imgLogo} src={logo} alt="logo of manage my lease company"></img>
    <h3><a id="email" href="mailto:sabrina.mianne@gmail.com">CONTACT</a></h3>
    <h3><a id="email" href="https://github.com/sabrinamianne">MY GITHUB</a></h3>
    <h3><a id="email" href="https://www.linkedin.com/in/sabrinamianne/">MY LINKEDIN</a></h3>


    </div>
  );
}

export default Footer;
