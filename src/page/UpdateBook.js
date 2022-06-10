import Header from "../components/Header"
import { Box, 
        Spinner,
        Button, 
        Input, 
        FormControl, 
        FormLabel, 
        FormErrorMessage
    } from "@chakra-ui/react"
import Footer from "../components/Footer"
import * as Yup from "yup"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const UpdateBook = () => {
    const navigate = useNavigate(),
    Formik = useFormik({
        initialValues:{
            name: "",
            password: "",
            email: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .required('Fill in your name'),
            email:Yup.string()
                    .email('Email is required'),
            password:Yup.string()
                    .max(13, 'password must be less than 13')
                    .required('please create your password'),            
        }),
        onSubmit: (values) => {
            const userData = {
                name:values.name,
                email: values.email,
                password: values.password
            }
            console.log(JSON.parse(userData))
            
        }
    }),
    Dispatch = useDispatch(),
    {user, isError, isSuccess, isLoading } = useSelector((state) => state.auth);


    useEffect(()=> {
        if(isError){
            console.log({'isError': `${isError}`})
        }

        if(isSuccess || user){
            navigate('/')
        }

        

    }, [ isError, isSuccess, navigate, user])

        if(isLoading){
            <Spinner/>
        }


    return(
        <>
            <Header/>
            <Box as="main" bgColor={'blue.100'}
                width="100%" height={"33.7rem"}>
                    <Box height="1rem" width={"100%"} ></Box>
                    <Box as="section"                         
                        width={"24rem"} 
                        margin="auto" 
                        bgColor={'#fff'} 
                        height="30rem">

                    <Box width="90%" margin={'auto'} mt="1rem">
                    <form onSubmit={Formik.handleSubmit}>
                <FormControl isRequired>
                <Box height="1rem" width={"100%"} ></Box>                        
                    <FormLabel htmlFor='name' mt="1rem">Full Name</FormLabel>
                    <Input 
                    type={'text'}
                    required
                    onBlur={Formik.handleBlur } 
                    id='name' 
                    placeholder='Name'
                    value ={Formik.values.name}
                    onChange = {Formik.handleChange} />
                       {Formik.touched.name && Formik.errors.name ? (
                    <FormErrorMessage> {Formik.errors.name}</FormErrorMessage>) : null}

                    <FormLabel htmlFor='email' mt="1rem">Email</FormLabel>
                    <Input
                    id='email'
                    type='email'
                    onBlur={Formik.handleBlur } 
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                    required/>
                    { Formik.touched.email &&!Formik.errors.email ? (null) : (
                    <FormErrorMessage>{Formik.errors.email}</FormErrorMessage>)}
      
                    <FormLabel htmlFor='password' mt="1rem">Password</FormLabel>
                    <Input 
                    type="password"
                    name="password"
                    onBlur={Formik.handleBlur}
                    required
                    value={Formik.values.password}
                    onChange ={Formik.handleChange}  />
                    {Formik.touched.password && Formik.errors.password ? 
                    <FormErrorMessage>{Formik.errors.password}</FormErrorMessage> : null}

                    <Button
                        
                        mt="1rem"
                        colorScheme='blue'
                        type='submit'>
                        Submit
                    </Button>
                </FormControl>
            </form>

                    </Box>
                    </Box>  
            </Box>
            <Footer/>
        </>
        )
}

export default UpdateBook