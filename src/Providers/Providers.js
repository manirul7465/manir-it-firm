import { useEffect, useState } from 'react';
import Provider from '../Provider/Provider';
import './Providers.css';
import Total from './../Total/Total';



const Providers = () => {
    const[providers,setProviders]=useState([]);
    const [total,setTotal]=useState([]);
    useEffect(()=>{
        fetch('./provider.JSON')
        .then(res=>res.json())
        .then(data=>setProviders(data))
    })
    const handleAddToCart=(provider)=>{
        const newTotal=[...total,provider];
        setTotal(newTotal);
    }
    return (   
            <div className="container">
               <div className='providers'> 
                   {
                       providers.map(provider=>
                       <Provider
                       key={provider.key}
                       provider={provider}
                       handleAddToCart={handleAddToCart}
                       > </Provider>)
                   }
               </div>
                <div>
                <div className='total'>
                  <Total total={total} ></Total>
                </div>
                </div>
            </div>
            
    );
};

export default Providers;