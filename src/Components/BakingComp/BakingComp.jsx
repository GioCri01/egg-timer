import React, { useState,useEffect } from 'react'
import'../BakingComp/BakingComp.css'
import { Egg } from '../../asset/Egg';

const BakingComp = (props) => {

    const{baking}=props
    const [selectedItem,setSelectedItem]= useState();

    useEffect(() => {
        baking(selectedItem)
    }, [selectedItem]);

     const select =(b)=>{
        if(b === selectedItem){
            setSelectedItem(undefined)
        }else{
            setSelectedItem(b)
        }
     }
    

    const colorEgg =(baking)=>{
        if (baking ==="soft") {
            return {
                backgroundColor: '#FF5000'
            }
        }else if(baking ==="medium"){
            return {
                backgroundColor: '#FFB000'
            }
        }else{
            return {
                backgroundColor: '#FFFF70'
            }
        }
    }

   
    return ( 
        <div className="Baking">
            {
               Egg.baking.map((baking,i)=>(
                    <div 
                    onClick={()=>select(baking)} 
                    className={`box ${selectedItem === baking?"active-egg":""}` }
                    >
                        <div className="egg">
                            <div className="white">
                                <div
                                   style={colorEgg(baking)}
                                    className="yolk"
                                ></div>
                            </div>
                        </div>
                        <span>{baking}</span>
                    </div> 
               )) 
            }
           
        </div>
     );
}
 
export default BakingComp;