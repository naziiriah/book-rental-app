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
import { useLocation, useNavigate } from "react-router-dom"
import { EditBook } from "../features/Books/bookSlice"
import { ErrorAlert, SuccessAlert } from "../components/Alert"


const UpdateBook = () => {
    const navigate = useNavigate(),
    Formik = useFormik({
        initialValues:{
            title: "",
            author: "",
            ISBN: "",
        },
        validationSchema: Yup.object({
            title: Yup.string()
                    .required('Fill in your name'),
            author:Yup.string()
                    .required(''),
            ISBN:Yup.string()
                    .required(''),            
        }),
        onSubmit: (values) => {
            const userData = {
                title:values.title,
                author: values.author,
                ISBN: values.ISBN
            }
            
            Dispatch(EditBook(userData, id))
        }
    }),
    Dispatch = useDispatch(),
    location = useLocation(),
    id = location.state.id,
    {isError, isSuccess, isLoading } = useSelector((state) => state.books);

    
    return(
        <>
            <Header/>
            {isError && ErrorAlert}
            {isSuccess && SuccessAlert}
            {isLoading && <Spinner/>}
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
                            <FormLabel htmlFor='title' mt="1rem">Title</FormLabel>
                            <Input 
                            type={'text'}
                            required
                            onBlur={Formik.handleBlur } 
                            id='title' 
                            placeholder='Title'
                            value ={Formik.values.title}
                            onChange = {Formik.handleChange} />
                            {Formik.touched.name && Formik.errors.title ? (
                            <FormErrorMessage> {Formik.errors.title}</FormErrorMessage>) : null}

                            <FormLabel htmlFor='author' mt="1rem">Author</FormLabel>
                            <Input
                            id='email'
                            type='email'
                            onBlur={Formik.handleBlur } 
                            value={Formik.values.author}
                            onChange={Formik.handleChange}
                            required/>
                            { Formik.touched.author &&!Formik.errors.author ? (null) : (
                            <FormErrorMessage>{Formik.errors.author}</FormErrorMessage>)}
            
                            <FormLabel htmlFor='isbn' mt="1rem">ISBN</FormLabel>
                            <Input 
                            type="text"
                            onBlur={Formik.handleBlur}
                            required
                            value={Formik.values.ISBN}
                            onChange ={Formik.handleChange}  />
                            {Formik.touched.ISBN && Formik.errors.ISBN ? 
                            <FormErrorMessage>{Formik.errors.ISBN}</FormErrorMessage> : null}

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