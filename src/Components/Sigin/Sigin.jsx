import React, { useState } from 'react'
import'../Sigin/Sigin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/counter';

const Sigin = () => {
    const navigate = useNavigate();
    const [name,setName]= useState("");
    const [pass,setPass]= useState("");
    const [errorFormName,setErrorFormName]= useState();
    const [errorFormPassword,setErrorFormPassword]= useState();
    const loginDispatch = useDispatch();
 
    const sigin = (e)=>{
      e.preventDefault();
      if (validationName(name)  && validationPassword(pass) ) {
        axios.post('http://localhost:8000/users', {
            name: name,
            password: pass
          })
          .then(function (response) {
            let user = {name:name,password:pass}
            console.log(response);
            navigate("/timer")
            loginDispatch(setLogin(user))
          })
          .catch(function (error) {
            console.log(error);
          });
      }  
    }

    const validationName = (e)=>{
      let isValidName = false
      if (!e ) {
        setErrorFormName("il campo nome è un campo obbligatorio")
      }else if(e.length < 5){
        setErrorFormName("il campo nome deve essere almeno di 5")
      }else{
        setErrorFormName("")
        isValidName = true
        console.log(isValidName);
      }
      return isValidName
    }

    const validationPassword = (e)=>{
      let isValidPass = false
      const upperCase =/^(?=.*[A-Z])/;
      const number = /(?=.*\d)/
      const length = /[A-Za-z\d]{5,}/
        if (!e) {
        setErrorFormPassword("la password è un campo obbligatorio")
        }else if (!e.match(upperCase)) {
          setErrorFormPassword("la password deve contenre un carattere maiuscolo")
        }else if(!e.match(number)){
          setErrorFormPassword("la password deve contenre un numero")
        }else if(!e.match(length)){
          setErrorFormPassword("il campo password deve essere almeno di 5")
        }else{
          setErrorFormPassword("")
          isValidPass = true
          console.log(isValidPass);
        }
      return isValidPass
    }
    
  return (
    <div className='Sigin'>
      <h1>Registrati</h1>
        <form >
            <label htmlFor=""> Nome</label>
            <input type="text" onChange={(e)=>{setName(e.target.value);validationName(e.target.value)}} />
            <span className='error'>{errorFormName}</span>
            <label htmlFor="">password</label>
            <input type="text"  onChange={(e)=>{setPass(e.target.value);validationPassword(e.target.value)}} />
            <span className='error'>{errorFormPassword}</span>
            <button type='submit' onClick={(e)=>sigin(e)}> Registrati</button>
            
        </form>
        
    </div>
  )
}

export default Sigin