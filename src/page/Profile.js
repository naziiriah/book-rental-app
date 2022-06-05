import { Box, Icon } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import {IoIosPerson} from "react-icons/io"
import { useMyBooks } from "../Hooks/useBooks"


const UserProfile = () => {
    
    const books = useSelector(state => state.books),
    currentUser = JSON.parse(localStorage.getItem('user')),
    currentUserProfile = books.books.filter(state => state.user.name === currentUser);
    useMyBooks()

    return(
    <>
        <Header/>
        <Box as="main" 
             width="90%" 
            margin={'auto'} height={'90rem'} 
            onClick={() => console.log(currentUserProfile)}>
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
                            <Box>Name: {currentUser.name}</Box>
                            <Box>Email: {currentUser.email}</Box>
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