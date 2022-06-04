import { Box, FormErrorMessage, Input, Button, FormLabel, FormControl } from "@chakra-ui/react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import * as Yup from "yup"
import { useFormik } from "formik"


const AddBook = () => {

    
    const Formik = useFormik({
        initialValues:{
            title:"",
            author: "",
            ISBN:"",
            price:0,
            image:'',
        },
        validationSchema: Yup.object({
            title:Yup.string()
                .max(13, 'password must be less than 13')
                .required('please create your password'),
            author:Yup.string()
                .max(13, 'password must be less than 13')
                .required('please create your password'),                  
            image:Yup.string()
                .max(13, 'password must be less than 13')
                .required('please create your password'),
            ISBN:Yup.string()
                .max(13, 'password must be less than 13')
                .required('please create your password'),
            price:Yup.number()
                .max(4, 'password must be less than 13')
                .required('please create your password'), 
        }),
        onSubmit: (values) => {
            const userData = {                
                author: values.author,
                ISBN: values.ISBN,
                image:values.image,
                price:values.price,
                title:values.title
            }
            console.log(userData)
        }
    })


    return(
        <>
           <Header/>
           <Box as="main" bgColor={'blue.100'}
                width="100%" height={"37.7rem"}>
                <Box height="1rem" 
                width={"100%"} ></Box>
                <Box as="section"                         
                    width={"24rem"} 
                    margin="auto" 
                    bgColor={'#fff'} 
                    height="35rem">
                    <Box width="90%" 
                        margin={'auto'} mt="1rem">
                        <form onSubmit={Formik.handleSubmit}>
                        <FormControl isRequired>
                        <Box height="1rem" width={"100%"} ></Box>                        

                        <FormLabel htmlFor='title' mt="1rem">Title</FormLabel>
                        <Input
                        id='title'
                        type='text'
                        onBlur={Formik.handleBlur } 
                        value={Formik.values.title}
                        onChange={Formik.handleChange}
                        required/>
                        { Formik.touched.title &&!Formik.errors.title ? (null) : (
                        <FormErrorMessage>{Formik.errors.title}</FormErrorMessage>)}

                        <FormLabel htmlFor='author' mt="1rem">Author</FormLabel>
                        <Input
                        id='author'
                        type='text'
                        onBlur={Formik.handleBlur } 
                        value={Formik.values.author}
                        onChange={Formik.handleChange}
                        required/>
                        { Formik.touched.author &&!Formik.errors.author ? (null) : (
                        <FormErrorMessage>{Formik.errors.author}</FormErrorMessage>)}
                    
                        <FormLabel htmlFor='ISBN' mt="1rem">ISBN</FormLabel>
                        <Input
                        id='ISBN'
                        type='text'
                        onBlur={Formik.handleBlur } 
                        value={Formik.values.ISBN}
                        onChange={Formik.handleChange}
                        required/>
                        { Formik.touched.ISBN &&!Formik.errors.ISBN? (null) : (
                        <FormErrorMessage>{Formik.errors.ISBN}</FormErrorMessage>)}

                        <FormLabel htmlFor='price' mt="1rem">Price</FormLabel>
                        <Input
                        id='price'
                        type='number'
                        onBlur={Formik.handleBlur } 
                        value={Formik.values.price}
                        onChange={Formik.handleChange}
                        required/>
                        { Formik.touched.price &&!Formik.errors.price ? (null) : (
                        <FormErrorMessage>{Formik.errors.price}</FormErrorMessage>)}

                        <FormLabel htmlFor='image' mt="1rem">Image</FormLabel>
                        <Input
                        id='image'
                        type='text'
                        onBlur={Formik.handleBlur } 
                        value={Formik.values.image}
                        onChange={Formik.handleChange}
                        required/>
                        { Formik.touched.image &&!Formik.errors.image ? (null) : (
                        <FormErrorMessage>{Formik.errors.image}</FormErrorMessage>)}
                   

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
export default AddBook