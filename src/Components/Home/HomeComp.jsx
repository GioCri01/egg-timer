import React,{useState,useEffect} from 'react'
import SelectSize from '../SelectSizeComp/SelectSize';
import BakingComp from '../BakingComp/BakingComp';
import TempComp from '../TempComp/TempComp';
import'../../Components/Home/HomeComp.css'
import TimerComp from '../TimerComp/TimerComp';
import { timeEgg } from '../../service/eggService';
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../../redux/counter';


const HomeComp = () => {
    const user = useSelector((state)=>state.counter.value)
    const logoutDispatch = useDispatch();
    const [selectSize,setSelectSize] = useState();
    const [selectedBaking,setSelectedBaking]= useState();
    const [selectedTemp,setSelectedTemp]= useState(0);
    const[egg,setEgg]= useState({});
    const[active,setActive]= useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setEgg({
            size:selectSize,
            baking:selectedBaking,
            temp:selectedTemp
            })
    }, [selectSize,selectedBaking,selectedTemp]);
    console.log("egg",egg);

    const logout = ()=>{
        sessionStorage.clear()
       logoutDispatch(setLogout(""))
        navigate("/")
    }

    // style={active=== true?{display:"none"}:{}}
    console.log("asd",user);
    return ( 
        <div className='HomeComp'>
                <div className='header'>
                    <h3>Benvenuto {user?.name}</h3>
                    <div><button onClick={()=>logout()}>logout</button> </div>
                </div>
                
                {active!== true?<SelectSize  size={setSelectSize}/>:""}
                {active!== true?<BakingComp baking={setSelectedBaking}/>:""}
                {active!== true? <TempComp temp={setSelectedTemp}/>:""}
                <TimerComp egg={setEgg} active={setActive} timeBaking={timeEgg(egg)}/>
        </div>
     );
}
 
export default HomeComp ;