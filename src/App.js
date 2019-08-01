import React from 'react';
import './App.css';
import List from './components/List.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home.jsx';




function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Switch>
            <Route  exact path='/' component={Home}/>
            <Route path='/rental' render={()=><List/>} />
         </Switch>
       </BrowserRouter>

    </div>
  );
}

export default App;
