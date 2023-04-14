import axios from "axios"
import { loginIstance } from "./Interceptors";


 
export const userValidation = (user)=>{
    let isPresent = false
    loginIstance.get(`users?name=${user.name}&password=${user.password}`)
    .then((res)=>{
        console.log("asd",res);
        if(res.data.length !== 0){
            isPresent = true
            sessionStorage.setItem("user",JSON.stringify(user))
        }
        
    })

    return isPresent
}