import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './components/User/User';
import fakeData from './fakeData/user.js'

function App() {

  const [users,setUser] = useState(fakeData);

  const [count, setCount] = useState([]);
 
  const handleAddFriend = (user) => {
    const newCount = [...count, user];
    setCount(newCount);
  }
  console.log(count);

  return (
    <div className="App">
      <header className="App-header"> 
        
          <div className="user">
          <h1 style={{textAlign:"center"}}>User Loaded: {users.length} </h1>
              {
                users.map(user=><User user={user} handleAddFriend={handleAddFriend} > </User> )
              }
          </div>
          <div className="cart">
            <h1>This is cart</h1>
            <h2> Added Friend: {count.length} </h2>
            <p>Added Friend List:</p>
            <ul> 
              {
                count.map(user=> <li style={{color:'cyan'}} > {user.username} </li> )
              }
            </ul>
           
          </div>
      </header>
    </div>
  );
}

export default App;
