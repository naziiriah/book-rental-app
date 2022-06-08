import { Box, Icon, Spinner } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {IoIosPerson} from "react-icons/io"
import { useMyBooks } from "../Hooks/useBooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const UserProfile = () => {
    useMyBooks()

   const {books, isLoading, isError} = useSelector(state => state.books),
    getUser = JSON.parse(localStorage.getItem('user')),
    navigate = useNavigate();

    if(books.message){
            console.log(books)
    }else{
        console.log('books')        
    }
    if(isLoading){
        <Spinner/>
    }
        useEffect(()=> {
        if(isError){
            navigate('/')
        }
    },[isError, navigate])
    return(
    <>
        <Header/>
        <Box as="main" 
             width="90%" 
            margin={'auto'} height={'90rem'} 
            >
                <Box as='section' width={'100%'} 
                    mt="3rem" height={'5rem'}>
                    <Box as="h1" fontSize={'33px'}
                        textTransform={'uppercase'}
                        >user information</Box>
                </Box>
                <Box as="section" width={'90%'} 
                    margin='auto' height="17rem" 
                    borderBottomColor={'blue.900'}
                    borderBottomStyle={'solid'}
                    borderBottomWidth={'1px'}
                    display={'flex'} >
                    <Box width={'14rem'} 
                        height={'14rem'} bgColor="blue.100">
                        <Icon fontSize={'213px'} as ={IoIosPerson}></Icon>
                    </Box>
                    <Box width={'26rem'} marginLeft={'4rem'}
                        height={'14rem'} marginTop={'11rem'}>
                            <Box>Name: {getUser.name}</Box>
                            <Box>Email: {getUser.email}</Box>
                        </Box>
                </Box>
                <Box as='section' width={'100%'} 
                    mt="3rem" height={'5rem'}>
                    <Box as="h1" fontSize={'33px'}
                        textTransform={'uppercase'}
                        >Rentals</Box>
                </Box>
                <Box as="section" width={'90%'} 
                    margin='auto' height="20rem"
                    borderBottomColor={'blue.900'}
                    borderBottomStyle={'solid'}
                    borderBottomWidth={'1px'}>
                        <Box as="h2">
                            Book rented = 0
                        </Box>
                </Box><Box as='section' width={'100%'} 
                    mt="3rem" height={'5rem'}>
                    <Box as="h1" fontSize={'33px'}
                        textTransform={'uppercase'}
                        >My Books</Box>
                        
                </Box>

        </Box>
        <Footer/>
    </>)
}

export default UserProfile