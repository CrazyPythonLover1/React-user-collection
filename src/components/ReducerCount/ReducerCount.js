import React, { useReducer } from 'react';

const initailState = {count: 0}

const reducer = (state,action) =>{
    
}

const ReducerCount = () => {

    const [state, dispatch] = useReducer(reducer, initailState);

    return (
        <div>
            <h1> This is reducer </h1>
        </div>
    );
};

export default ReducerCount;