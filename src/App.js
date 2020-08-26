import React from 'react';

import './App.css';
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
  
 let totalSalary = 0;
 for(let i=0; i<count.length; i++){
   const user = count[i];
   const salary = user.salary;
   totalSalary = totalSalary + parseInt(salary);
 }




  return (
    <div className="App">
      <header className="App-header"> 
        
          <div className="user">
          <h1 style={{textAlign:"center"}}>User Loaded: {users.length} </h1>
              {
                users.map(user=><User user={user} handleAddFriend={handleAddFriend} key={user.id}  > </User> )
              }
          </div>
          <div className="cart">
            <h2> Added Friend: {count.length} </h2>
            <p>Added Friend List with Salary:</p>
            <ul> 
              {
                count.map(user=> 
                  <li style={{color:'cyan'}} > {user.username} ${user.salary}  </li> 
                 )              
              }
            </ul>
           <hr/>
           <h2>Total Salary: ${totalSalary} </h2>
          </div>
      </header>
    </div>
  );
}

export default App;
