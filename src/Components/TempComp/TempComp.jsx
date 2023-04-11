import React, { useState,useEffect } from 'react'
import '../TempComp/TempComp.css'

const TempComp = (props) => {
    const{temp}=props;

    const [value,setValue]= useState(0);
   
    const MIN = 0;
    const MAX = 220;
    useEffect(() => {
        temp(value)
       
    }, [value]);
    
    console.log(value);
    return ( 
        
        <div className='Temp'>
            <div className='min-max'>
                <span>{MIN}</span>
                <span className='value'>{value}</span>
                <span>{MAX}°</span>
            </div>
            <input  onChange={(e)=>setValue(e.target.value)} type="range" min={MIN} max={MAX}  value={value}/>
            
        </div> 
    );
}
 
export default TempComp;