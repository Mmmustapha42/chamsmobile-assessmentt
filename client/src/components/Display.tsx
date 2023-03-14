import { useEffect } from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import { Header } from './Header'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../reduxState/Store';
import { deleteUserAsync, getUsersAsync } from '../features/slice';
import {useNavigate} from 'react-router-dom'




export const Display = () => {

  

  const users = useSelector ((state:RootState) =>state.users.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{  
     dispatch(getUsersAsync() as any)
  },[])

  const columns:GridColDef[] = [
    { field: "id", headerName: "Employee ID" },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
      
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "web_stack",
      headerName: "Web Stack",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <ButtonGroup
          variant='contained'
          
          aria-label='contained primary button group'
          >
            <Button onClick={()=>navigate(`/edit-user/${cellValues.id}`)} sx={{marginRight:'5px'}} color='primary'>Edit</Button>
            <Button onClick={()=>{handleDelete(cellValues.id as number)}} color='secondary'>Delete</Button>
          </ButtonGroup>
        );
      },
    },
  ];

  const handleDelete = async (id:number)=> {
    if(window.confirm('Are you sure you want to delete the user?')){
      await dispatch(deleteUserAsync(id) as any)
      dispatch(getUsersAsync() as any)
    }
  }
  


  return (
    <Box m='20px'>
        <Header title='ADMIN DASHBOARD' subtitle='Chamsmobile Employees details'/>
        <Button variant="contained" sx={{ml:'45%'}} onClick={()=>navigate('/add-user')} color='success'>Create Employee</Button>
        <Box m="40px 0 0 0"
             height="75vh">
            <DataGrid rows={users} columns={columns} components={{ Toolbar: GridToolbar }}></DataGrid>
        </Box>
        
    </Box>
  )
   
}
