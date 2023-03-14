import * as types from './ActionType'

export interface User {
  first_name:string
  last_name:string
  email:string
  web_stack:string
}

// export type Boss = 
export interface UserState{
  users: User[]
}


export type Action = {
  type:string,
  payload:User
}

export const initialState:UserState = {
  users:[]
}


export const usersReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        users:[...state.users, action.payload]}
      
    default:
      return state
  }
}

