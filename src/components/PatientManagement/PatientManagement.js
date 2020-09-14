import React, { useReducer } from 'react';
import { patientReducer, patientState } from '../reducers/patientReducer';
import { useRef } from 'react';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer,patientState);
    const handleSubmit = event =>{
        event.preventDefault();
        dispatch({type: 'ADD_PREVENT', name: nameRef.current.value})
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <h1> Patient Management: {state.patients.length} </h1>
            <form onSubmit={handleSubmit} action="">
                <input ref={nameRef}/>
                <br/>
                <br/>
            </form>
        </div>
    );
};

export default PatientManagement;