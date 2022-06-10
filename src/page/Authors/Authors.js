import { Box } from "@chakra-ui/react"
import {  useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useAllBook } from "../../Hooks/useBooks"

const Authors = () => {
    useAllBook()    
    const books  = useSelector(state => state.books),
    Authors = books.books.map(state => state.author),
    singleAuthors = [...new Set(Authors)],
    navigation = useNavigate();

    return(
        <>
        <Header/>
        <Box as="main" width={'80%'} 
            margin={'auto'} my="5rem" >
                { singleAuthors.map(
                    (state,index) =>
                           {return(
                            <Box as="section" onClick={() => navigation(`/authors/${state}`)}
                                key={index} width={'100%'} my={'1rem'}
                                transition={'ease-in .3s'} cursor={'pointer'}
                                _hover={{color:'blue.300',backgroundColor:'#fff'}}
                                textTransform={'capitalize'} fontSize
                                backgroundColor={'blue.300'} py="1.9rem"
                                color={'#fff'} textAlign={'center'}
                                height ="6rem">{state}
                            </Box>
                            ) })}
        </Box>
        <Footer/>
        </>
    )
}
export default Authors