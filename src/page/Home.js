import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AddButton } from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Home = () => {
    const navigate = useNavigate(),
    [Books, setBooks] = useState([])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user){
            navigate('/login')           
        }   

    })

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
                    bgColor="red" height="60rem" >
                    
                </Box>
            </Box>
            <Footer/>
        </>
    )
}

export default Home