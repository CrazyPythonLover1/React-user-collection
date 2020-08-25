import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './components/User/User';

function App() {
  const [user,setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
    setUser(data)
    }
      )
  },[])

  const [img, setImg]= useState([])
    useEffect(()=>{
        fetch('https://pixabay.com/api/?key=18042452-f0123c87a7cb328ac449b811c&q=users&image_type=photo')
        .then(res=>res.json())
        .then(data=>{
          console.log()
        })
    },[])
    
  console.log(img)
  return (
    <div className="App">
        <h1>User Loaded: {user.length} </h1>
        <div className="user">
        {
            user.map(user=> <User user={user} img={img} > </User> )
          }
        
        </div>
        <div className="cart">
          this is cart 
        </div>
    </div>
  );
}

export default App;
