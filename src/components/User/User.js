import React from 'react';
import './User.css';


const User = (props) => {
    return (
        
        <div className="user" >
            <div className="singleUser">
                <div className="userImg">
                    <img src={props.user.userImageURL} ></img>
                    
                </div>
                <div className="userInfo">
                    <h1> {props.user.name} </h1>
                </div>
            </div>
        </div>
    );
};

export default User;