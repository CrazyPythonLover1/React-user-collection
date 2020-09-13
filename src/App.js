import React from 'react';
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetail from './components/UserDetail/UserDetail';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {


  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <header className="App-header"> 
      
        <Router>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/user/:id">
              <UserDetail/>
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
