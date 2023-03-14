
import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/slice'
import toggleSlice from '../features/toggleSlice'



export const store = configureStore({
    reducer:{
        users:userReducer, 
        themes:toggleSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch