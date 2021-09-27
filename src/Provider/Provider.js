import React from 'react';
import './Provider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Provider = (props) => {  
    const {name,img,specialty,Age,salary,experience}=props.provider;
    return (
        <div className='provider'>
            <img className='img' src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Speciality:{specialty}</h3>
            <h3>experience:{experience}</h3>
            <h3>Age:{Age}</h3>
            <h3>salary: {salary} BDT</h3>
            <button 
            onClick={()=>props.handleAddToCart(props.provider)}
            className='button'><FontAwesomeIcon icon={faShoppingCart}/>  Add your devoloper</button>
            
        </div>
    );
};

export default Provider;