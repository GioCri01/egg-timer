import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    value: JSON.parse(sessionStorage.getItem("user")) 
  },
  reducers:{
    setLogin:(state,action)=>{
      state.value = action.payload
    },
    setLogout:(state,action)=>{
      state.value = action.payload
    }
    
  }
  
})

export const { setLogin,setLogout } = counterSlice.actions
export default counterSlice.reducer