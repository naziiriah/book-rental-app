import { Box } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useMyBooks } from "../Hooks/useBooks"

const Book = () => {
        const { title } = useParams(),
        { book } = useSelector((state) => state.books)
       useMyBooks()

        
    return(
        <>
            <Header/>
            <Box as="main">
                specific book = {title} ,
            </Box>
            <Footer/>
        </>
    )
    
}

export default Book