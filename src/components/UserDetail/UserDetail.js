import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const UserDetail = () => {
    const {id} = useParams()
    const [user,setUser] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(response =>response.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h3>User Detail {id}</h3>
            <h2> Name: {user.name} </h2>
            <h3>Username: {user.username} </h3>
            <h4>Email: {user.email} </h4>

        </div>
    );
};

export default UserDetail;