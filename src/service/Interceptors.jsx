import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const loginIstance = axios.create({
  baseURL: 'http://localhost:8000/'
})

const Interceptors = () => {
    const navigate = useNavigate();

    
    useEffect(() => {
      loginIstance.interceptors.response.use((res)=>{
        console.log("app",res);
        if (res.data.length === 0) {
            navigate("/")  
        }else{  
            navigate("/timer")
        }
        return res
      })
      
    }, []);
    
   
   
  return (
    <></>
  )
}

export default Interceptors