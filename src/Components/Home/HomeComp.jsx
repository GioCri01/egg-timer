import React,{useState,useEffect} from 'react'
import SelectSize from '../SelectSizeComp/SelectSize';
import BakingComp from '../BakingComp/BakingComp';
import TempComp from '../TempComp/TempComp';
import'../../Components/Home/HomeComp.css'
import TimerComp from '../TimerComp/TimerComp';
import { timeEgg } from '../../service/eggService';

const HomeComp = () => {
    const [selectSize,setSelectSize] = useState();
    const [selectedBaking,setSelectedBaking]= useState();
    const [selectedTemp,setSelectedTemp]= useState(0);
    const[egg,setEgg]= useState({});
    const[active,setActive]= useState(false);

    useEffect(() => {
        setEgg({
            size:selectSize,
            baking:selectedBaking,
            temp:selectedTemp
            })
    }, [selectSize,selectedBaking,selectedTemp]);
    console.log("egg",egg);

    // style={active=== true?{display:"none"}:{}}
    return ( 
        <div className='HomeComp'>
                {active!== true?<SelectSize  size={setSelectSize}/>:""}
                {active!== true?<BakingComp baking={setSelectedBaking}/>:""}
                {active!== true? <TempComp temp={setSelectedTemp}/>:""}
                <TimerComp egg={setEgg} active={setActive} timeBaking={timeEgg(egg)}/>
        </div>
     );
}
 
export default HomeComp ;