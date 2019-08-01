import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Img from '.././assets/img/home.jpg';
import Loupe from '.././assets/img/loupe.svg.png';



function Home() {

  const links = {
  width: '50em',
  height: '3em',
  border: '1px solid #fafafa',
  backgroundColor: '#fafafa',
  opacity: '0.9.5',
  position: 'absolute',
  zIndex: '1',
  marginTop:'8%',
  top: '50%',
  left: '50%',
  borderRadius: '8%',
  transform: 'translate(-50%, -50%)'
  }

  const image = {
    marginTop: '2%',
    width: '100%',
    zIndex: '-1'
  }
   const p = {
       marginTop: '5.5%',
       marginLeft: 'auto',
       marginRight: 'auto',
       width: '90em',
       fontSize: '16px'
   }
   const loupe = {
     width: '40px',
     height: '40px'
   }

  return (
    <div>
      <style jsx> {`
        #link:link {
            text-decoration: none;
            float: right;
          }
        #links{
          margin-left: auto;
          margin-right: auto;
        }
        #text{
          font-size: 25px;
          color: grey;
          float:left;
        }


          `}
      </style>
      <p style={p}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an xt ever since the 1500s, when an endend!!
     </p>
      <div>
        <img
        style={image}
        src={Img} alt="Apartment Image"></img>
        <div
        style={links}>
        <span id="text">Enter an adress, city or ZIP code </span><Link id="link" to="/rental"><span><img style = {loupe} src={Loupe}></img></span></Link>
        </div>
      </div>

  </div>
  );
}

export default Home;
