import React, { useState,useEffect } from 'react'
import '../SelectSizeComp/SelectSize.css'
import{Egg} from '../../asset/Egg'


const SelectSize = (props) => {
    const{size}=props
    const [selectSize,setSelectSize] = useState();
    useEffect(() => {
        size(selectSize)
    }, [selectSize]);

    const select =(b)=>{
        if(b === selectSize){
            setSelectSize(undefined)
        }else{
            setSelectSize(b)
        }
     }


    return ( 
        <>
        <div className='Size'>
            {
                Egg.size.map((size,i)=>(
                    <div 
                    onClick={()=>select(size)} 
                    key={i}  
                    className={`select-size ${selectSize === size?"active-size":""}` }
                    ><span>{size}</span></div>
                ))
            }
            
        </div>
        <div className="grams">
            {
                Egg.grams.map((grams,i)=>(
                    <div key={i} className="gram"><span>{grams}g</span></div>
                ))
            }
        </div>
        </>
     );
}
 
export default SelectSize ;