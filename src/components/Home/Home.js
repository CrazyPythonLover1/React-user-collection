import React from 'react';
import { useState } from 'react';
import User from '../User/User';
import fakeData from '../../fakeData/user'
import { useEffect } from 'react';

const Home = () => {

    const [users,setUser] = useState(fakeData);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))
    },[])

    const [count, setCount] = useState([]);
   
    const handleAddFriend = (user) => {
      const newCount = [...count, user];
      setCount(newCount);
    }
    
   let totalSalary = 0;
   for(let i=0; i<count.length; i++){
     const user = count[i];
     const salary = user.salary;
     totalSalary = totalSalary + parseInt(salary*12);
   }
  
    return (
        <div>
            <div className="user">
        <h1 style={{textAlign:"center"}}>User Loaded: {users.length} </h1>
            {
              users.map(user=><User user={user} handleAddFriend={handleAddFriend} key={user.id}  > </User> )
            }
        </div>
        <div className="cart">
          <h2> Added Friend: {count.length} </h2>
          <p>Added Friend List with Yearly Salary:</p>
          <ul> 
            {
              count.map(user=> 
                <li style={{color:'cyan'}} > {user.username} ${user.salary*12}  </li> 
               )              
            }
          </ul>
         <hr/>
         <p>Total Salary: ${totalSalary} </p>
        </div>
        </div>
    );
};

export default Home;