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
                                key={index}  width={'100%'} my={'1rem'}
                                height ="10rem" bgColor={'red'} color>{state}
                            </Box>
                            ) })}
        </Box>
        <Footer/>
        </>
    )
}
export default Authors