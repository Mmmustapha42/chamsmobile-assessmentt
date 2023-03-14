import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Header } from './Header'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getSingleUserAsync, updateUserAsync } from "../features/slice";
import { RootState } from "../reduxState/Store";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  

  let {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {users} = useSelector ((state:RootState) =>state.users)
 
  // useEffect(()=>{
  //   dispatch(getSingleUserAsync(id) as any)
  // },[])

  // useEffect(()=>{
  //   dispatch(getSingleUserAsync(id) as any)
  // },[])

  const handleFormSubmit = (values:any, actions:any) => {
    dispatch(updateUserAsync(values, id)as any)
    //navigate('/')
    
  };

  return (
    <Box m="20px">
      <Header title="Edit Profile" subtitle='Edit Employee Profile' />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.first_name}
                name="first_name"
                error={!!touched.first_name && !!errors.first_name}
                helperText={touched.first_name && errors.first_name}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.last_name}
                name="last_name"
                error={!!touched.last_name && !!errors.last_name}
                helperText={touched.last_name && errors.last_name}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Web Stack"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.web_stack}
                name="web_stack"
                error={!!touched.web_stack && !!errors.web_stack}
                helperText={touched.web_stack && errors.web_stack}
                sx={{ gridColumn: "span 4" }}
              />
              
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Edit User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  last_name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  web_stack: yup.string().required("required"),
});
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  web_stack: ""
};

export default Form;