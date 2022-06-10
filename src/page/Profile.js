import { Box, Icon, Spinner,Image, Link } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {IoIosPerson} from "react-icons/io"
import { useMyBooks } from "../Hooks/useBooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { DeleteUser, Edituser } from "../components/Button"


const UserProfile = () => {
    useMyBooks()

   const { isLoading, isError} = useSelector(state => state.books),
    getUser = JSON.parse(localStorage.getItem('user')),
    getMyBook =  JSON.parse(localStorage.getItem('MyBooks')),
    getRentedBooks = getUser.rented,
    navigate = useNavigate();

    
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
                    <Box width={'10rem'} display={'grid'}>
                        <Edituser/>    
                        <DeleteUser/>
                    </Box>
                    
                </Box>
                <Box as='section' 
                    width={'90%'} margin={'auto'}
                    mt="3rem" height={'5rem'}>
                    <Box as="h1" fontSize={'33px'}
                        textTransform={'uppercase'}
                        >Rented</Box>
                    
                </Box>
                <Box as="section" width={'90%'} 
                    margin='auto' 
                    borderBottomColor={'blue.900'}
                    borderBottomStyle={'solid'}
                    borderBottomWidth={'1px'}>
                        <Box as="h2">
                            Book rented
                        </Box>
                        {
                            getRentedBooks && getRentedBooks.length> 0 ? 
                                getRentedBooks.map((state, index) => {
                                    return (
                                        <Box as="" 
                                            key={index} width={'100%'} my={'1rem'}
                                            transition={'ease-in .3s'} cursor={'pointer'}
                                            _hover={{color:'blue.300',backgroundColor:'#fff'}}
                                            textTransform={'capitalize'} fontSize
                                            backgroundColor={'blue.300'} py="1.9rem"
                                            color={'#fff'} textAlign={'center'}
                                            height ="6rem">{state.title}
                                        </Box>
                                    )
                                }) : 
                                <Box width={'100%'} my={'1rem'}
                                    transition={'ease-in .3s'} cursor={'pointer'}
                                    _hover={{color:'blue.300',backgroundColor:'#fff'}}
                                    textTransform={'capitalize'} fontSize
                                    backgroundColor={'blue.300'} py="1.9rem"
                                    color={'#fff'} textAlign={'center'}
                                    height ="6rem">
                                        You have not rented any book
                                </Box>
                        }
                </Box>
                
                <Box as='section' width={'90%'} margin={'auto'}
                    mt="3rem" height={'5rem'}>
                    <Box as="h1" fontSize={'33px'}
                        textTransform={'uppercase'}
                        >My Books</Box>
                        <Box as="h2">
                            Books added to the Library
                        </Box>
                                {
                                    getMyBook && getMyBook.length > 0 ?
                                            getMyBook.map((state, index) => {
                                                return(
                                                    <Box as='section' key={state._id}
                                                    my={'1rem'} width={'100%'}
                                                    height="12rem" pt={'1rem'}
                                                    textTransform={'capitalize'}
                                                    borderBottomColor={"blue.300"}
                                                    borderBottomStyle={'solid'}
                                                    borderBottomWidth={'.1rem'} display={'flex'}>
                                                    <Image src={state.image ? state.image : null} 
                                                        width={'8rem'} height={'8rem'} borderWidth={'.1rem'}
                                                        borderStyle={'solid'} borderColor={'blue.100'} mt=".4rem"
                                                    />
                                                    <Box width={'60%'} mx="1rem" height={'10rem'}>
                                                        <Box as={'h2'} my=".2rem" textTransform={'capitalize'}>Title: {state.title}</Box>
                                                        <Box as={'h2'} my=".2rem" textTransform={'capitalize'}>Author: {state.author}</Box>
                                                                                                                                              
                                                    </Box>
                                                </Box>
                                                )
                                            }) : 
                                                <Box width={'100%'} my={'1rem'}
                                                    transition={'ease-in .3s'} cursor={'pointer'}
                                                    _hover={{color:'blue.300',backgroundColor:'#fff'}}
                                                    textTransform={'capitalize'} fontSize
                                                    backgroundColor={'blue.300'} py="1.9rem"
                                                    color={'#fff'} textAlign={'center'}
                                                    height ="6rem">
                                                    You have not rented any book
                                                </Box>
                                }
                                
                </Box>
                
        </Box>
        <Footer/>
    </>)
}

export default UserProfile