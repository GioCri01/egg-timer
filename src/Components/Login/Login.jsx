import React, { useState } from 'react'
import'../Login/Login.css'
import {userValidation}from '../../service/loginService'
import { useDispatch } from 'react-redux';
import {  setLogin } from '../../redux/counter';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [name,setName]= useState();
    const [pass,setPass]= useState();
    const [isPresent,setIsPresent] = useState();
    const loginDispatch = useDispatch();

    const accedi =(e)=>{
        e.preventDefault();
        let user = {name:name,password:pass}
        userValidation(user);
        if (userValidation(user) === true) {
          setIsPresent(true)
        }else{
          setIsPresent(false)
        }
        console.log(userValidation(user)); 
        loginDispatch(setLogin(user))
    }

    const feedBack = ()=>{
      return( isPresent === false ? <p>utente non trovato</p>:"")
    }
    

    
    
  return (
    <div className='Login'>
      <h1>Accedi</h1>
        <form >
            <label htmlFor=""> Nome</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}  onFocus={()=>setIsPresent(true)}/>
            <label htmlFor="">password</label>
            <input type="text" onChange={(e)=>setPass(e.target.value)} onFocus={()=>setIsPresent(true)} />
            <button type='submit' onClick={(e)=>accedi(e)}> Accedi</button>
            <span className='sigin' onClick={()=>{navigate("/sigin")}}>Registrati</span>
            {feedBack()}
        </form>
        
        
    </div>
  )
}

export default Login