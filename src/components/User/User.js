import React from 'react';
import './User.css';


const User = (props) => {
    const img = props.img.hits
    console.log(typeof(img))
    
    return (
        
        <div className="user" >
            <div className="userImg">
                
                
            </div>
            <div className="userInfo">
            <h1> {props.user.name} </h1>
            </div>
        </div>
    );
};

export default User;