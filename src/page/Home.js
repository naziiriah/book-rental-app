import { Box } from "@chakra-ui/react"
import { useEffect, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AddButton } from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { getAllBooks } from "../features/Books/bookSlice"


const Home = () => {
    const navigate = useNavigate(),
    dispatch = useDispatch(),
    bookFile = useSelector((state) => state.books);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user){
            navigate('/login')           
        }   
        dispatch(getAllBooks())
    }, [dispatch, navigate])
    
    return(
        <>
            <Header/>
            <Box as={'main'} 
            height="70rem" 
            width="80%" margin="auto">
                <Box as="aside" 
                    height={"6rem"} display={'flex'}
                    justifyContent={'flex-end'}
                    width="100%" marginTop={'4rem'}>
                        <AddButton/>
                </Box>
                <Box as="section"
                    width="100%"
                    bgColor="red" height="60rem" onClick={() => console.log(bookFile.books)}>
                    
                </Box>
            </Box>
            <Footer/>
        </>
    )
}

export default Home