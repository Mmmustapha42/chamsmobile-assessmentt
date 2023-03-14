import React from 'react'
import { Box, Typography } from '@mui/material'


type inputProps = {
    title:string
    subtitle:string
}

export const Header = ({title, subtitle}:inputProps) => {
    
  return (
    <Box mb='30px'>
        <Typography sx={{mb:"5px"}} variant='h4' fontWeight='bold' color='#black'>{title}</Typography>
        <Typography variant='body1' color='#black'>{subtitle}</Typography>
    </Box>
  )
}
