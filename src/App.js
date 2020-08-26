import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './components/User/User';
import fakeData from './fakeData/user.js'

function App() {

  const [user,setUser] = useState(fakeData)
 
  



  return (
    <div className="App">
      <header className="App-header"> 
        
          <div className="user">
          <h1>User Loaded: {user.length} </h1>
              {
                user.map(user=><User user={user}  > </User> )
              }
          </div>
          <div className="cart">
            <h1>This is cart</h1>
          </div>
      </header>
    </div>
  );
}

export default App;
