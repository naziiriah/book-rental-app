import Header from "../components/Header"
import { Box, FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"

import { AddBooks } from "../features/Books/bookSlice"
import Footer from "../components/Footer"



const AddToBook = () => {
    
    const Formik = useFormik({
        initialValues:{
            title: "",
            author: "",
            ISBN: "",
            image: "",              
        },
        validationSchema: Yup.object({
            title: Yup.string()
                    .required('Fill in your name'),
            author:Yup.string()
                        .required(''),
            ISBN:Yup.string()
                    .required('please create your password'),            
        }),
        onSubmit: (value) => {
            const userData = {
                title:value.title,
                author: value.author,
                ISBN: value.ISBN,
                image:value.image
            }
            Dispatch(AddBooks(userData))
            // console.log(JSON.stringify(userData))
        }
    }),
    Dispatch = useDispatch();


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
                    <form onSubmit={Formik.handleSubmit} >
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

                    <FormLabel htmlFor='ISBN' mt="1rem">ISBN</FormLabel>
                    <Input
                    type={'text'}
                    required
                    onBlur={Formik.handleBlur } 
                    id='ISBN' 
                    placeholder='ISBN'
                    value ={Formik.values.ISBN}
                    onChange = {Formik.handleChange}/>
                    
      
                    <FormLabel htmlFor='text' mt="1rem">Author</FormLabel>
                    <Input 
                    type="text"
                    onBlur={Formik.handleBlur}
                    required
                    id='author' 
                    placeholder='author'
                    value={Formik.values.author}
                    onChange ={Formik.handleChange}  />

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

export default AddToBook