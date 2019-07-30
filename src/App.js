import React from 'react';
import './App.css';
import List from './components/List.jsx';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <List/>

    </div>
  );
}

export default App;
