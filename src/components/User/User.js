import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './User.css';
import { Link, useHistory  } from 'react-router-dom';



const User = (props) => {
    const {id,name,username,userImageURL,email,phone,company, address} = props.user
    
    let history = useHistory();
    const handleClick = (friendId) =>{
        history.push(`/user/${friendId}`)
    }
    
    return (
        
        <div className="user" >
            <div className="singleUser">
                <div className="userImg">
                    <img src={userImageURL} ></img>
                    
                </div>
                <div className="userInfo">
                    <h2> Name: {name} </h2>
                    <p> Username: {username} </p>
                    <p> Email: {email} </p>
                    <p> Phone: {phone} </p>
                    <p> Company: {company.name} </p>
                    <p> Country: {address.city} </p>
                    {/* <Link to={`/user/${id}`}>  Show details </Link> */}

                    <button onClick={()=>handleClick(id)}  > Click me </button>
                    

                    <button onClick={()=> props.handleAddFriend(props.user)} >  <FontAwesomeIcon icon={faPlusCircle} /> Add Friend </button>
                </div>
            </div>
        </div>
    );
};

export default User;