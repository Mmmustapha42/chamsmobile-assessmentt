//import React,{useContext} from 'react'
import { Box, IconButton} from '@mui/material'
//import {tokens } from '../../Themes'
import {InputBase} from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../reduxState/Store'
import toggleBackgroundColor from '../features/toggleSlice'

export const Topbar = () => {

  const backgroundColor = useSelector((state: RootState) => state.themes.backgroundColor);
  const dispatch = useDispatch();


  // const handleClick = () => {
  //   dispatch(toggleBackgroundColor(backgroundColor, 'b') as any);
  // }
  const handleNote = ()=>{
    if(window.confirm('You don`t have any notifications')){
      console.log('Ok')
  }
}
const handleSettings = ()=>{
  if(window.confirm('You have to be an admin to access this feature.')){
    console.log('Ok')
}
}
  return (
    <Box bgcolor='aqua' display='flex' justifyContent='space-between' p={2} sx={{position:'sticky', top:'0'}}>
      
      <Box display='flex' bgcolor='#727681' borderRadius='3px' position='sticky' top='0'>
        <InputBase sx={{ml:2, flex:1}} placeholder='Search'/>
        <IconButton type='button' sx={{p:1}}>
          <SearchIcon/>
        </IconButton>
      </Box>
      <Box display='flex'>
      <IconButton onClick={()=>{}} >
        {backgroundColor ? <DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/>}
      </IconButton>
        <IconButton onClick={handleNote}> <NotificationsOutlinedIcon/></IconButton>
        <IconButton onClick={handleSettings}> <SettingsOutlinedIcon/></IconButton>
        <IconButton> <PersonOutlinedIcon/></IconButton>
      </Box>
      
    </Box>
  )
}