import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";


interface UserState {
  users:User[]
}
interface User {
    first_name:string;
    last_name_:string;
    email:string;
    web_stack:string
}

const initialState:UserState = {
    users:[]
    
}
 
export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        getUser:(state: UserState, action:PayloadAction<User[]>)=>{
            state.users = action.payload
        },
        deleteUser:(state:UserState, action:PayloadAction<User[]>)=> {
            state = {...state}
        },
        addUser:(state:UserState, action:PayloadAction<User[]>)=> {
            // console.log('users', action.payload)
            return {...state, users: action.payload}
        },
        getSingleUser:(state:UserState, action:PayloadAction<User[]>)=> {
            return  {...state, users:action.payload }
        },
        updatedUser:(state:UserState, action:PayloadAction<User[]>)=>{
            return {...state, users: action.payload}
        }
    }
})



export const getUsersAsync = () => async (dispatch: any) => {
    try {
        const response = await axios.get('http://localhost:8080/users')
       await dispatch(getUser(response.data))
        console.log(response.data)
    } catch (error: any) {
        console.log(error)
        throw new Error(error)
    }
}

export const deleteUserAsync = (id:number) => async (dispatch:any) => {
    try {
        const response = await axios.delete(`http://localhost:8080/users/${id}`)
       dispatch(deleteUser(response.data))
    } catch(err:any){
        console.log(err)
    }
}

export const addUserAsync = (user:User ) => async (dispatch:any) => {
    try {
        // console.log(user)
        const response = await axios.post(`http://localhost:8080/users`, user)
        console.log(response)
       dispatch(addUser(response.data))
    } catch(err:any){
        console.log(err)
    }
}

export const getSingleUserAsync = (id:any) => async (dispatch:any) => {
    try {
        const response = await axios.get(`http://localhost:8080/users/${id}`)
       dispatch(getSingleUser(response.data))
    } catch(err:any){
        console.log(err)
    }
}

export const updateUserAsync = (user: User , id:any) => async (dispatch:any) => {
    try {
        const response = await axios.put(`http://localhost:8080/users/${id}`,user)
       dispatch(updatedUser(response.data))
    } catch(err:any){
        console.log(err)
    }
}

export const { getUser, deleteUser, addUser, getSingleUser, updatedUser } = userSlice.actions 
export default userSlice.reducer;


