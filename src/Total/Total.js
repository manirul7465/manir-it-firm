import React from 'react';
import './Total.css';

const Total = (props) => {
    const{total}=props;
    let totalCost=0;
    for(const provider of total)
    totalCost=totalCost+provider.salary;

    return (
        <div className="total">
               {
                total.map( providerName => <h2>Name: <span className="text-color">{providerName.name}</span> </h2>
               )}
            <h2>Total added: <span className="text-color">{props.total.length}</span> </h2>
            <h2>Total cost: <span className="text-color">{totalCost}</span>  BDT</h2>
        </div>
    );
};

export default Total;