import { Box, Input, Button, FormLabel, FormControl } from "@chakra-ui/react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddBooks } from "../features/Books/bookSlice"


const AddBook = () => {
    const [title, setTitle] = useState(''),
    [author, setAuthor] = useState(''),
    [ISBN,setISBN] = useState(''),
    [price, setPrice] = useState(0),
    [image,setImage] = useState(''),
    dispatch = useDispatch(),
    handleSubmit=() =>{
        const userData = {
            title,
            author,
            ISBN,
            price,
            image,
            available:true,
        }        
        alert(1)
        dispatch(AddBooks(userData))
        localStorage.setItem('userr', JSON.stringify(userData))
        
    };



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
                        <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                        <Box height="1rem" width={"100%"} ></Box>                        

                        <FormLabel htmlFor='title' mt="1rem">Title</FormLabel>
                        <Input
                        id='title'
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required/>

                        <FormLabel htmlFor='author' mt="1rem">Author</FormLabel>
                        <Input
                        id='author'
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required/>
                    
                        <FormLabel htmlFor='ISBN' mt="1rem">ISBN</FormLabel>
                        <Input
                        id='ISBN'
                        type='text'
                        value={ISBN}
                        onChange={(e) => setISBN(e.target.value)}
                        required/>


                        <FormLabel htmlFor='price' mt="1rem">Price</FormLabel>
                        <Input
                        id='price'
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required/>

                       <FormLabel htmlFor='image' mt="1rem">Image</FormLabel>
                        <Input
                        id='image'
                        type='file'
                        onChange={(e) => setImage(e.target.value)}
                        required/>
                        
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