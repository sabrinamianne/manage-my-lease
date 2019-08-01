import React from 'react';



function Header() {
  const header = {
    height: '5em',
    width: '100%',
    marginBottom: '0',
    backgroundColor: '#baddff',
    marginTop: '1.5%',
    color: 'white',
    fontFamily: 'Courier New'
  }
  const input = {
    width: '250px',
    height: '25px',
    marginTop: '1%',
    float: 'left',
    marginLeft: '2%',
    fontSize: '15px'
  }

  return (
    <div style= {header}>
      <input
      style={input}
      placeholder="Adress"
      type="text"
      ></input>
    </div>
  );
}

export default Header;
