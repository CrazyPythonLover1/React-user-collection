import React from 'react';
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <header className="App-header"> 
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      
        
      
      </header>
    </div>
  );
}

export default App;
