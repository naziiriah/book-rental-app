import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Book = () => {
        const { title } = useParams(),
        [Title, setTitle] = useState([]),
        { book } = useSelector((state) => state.books);


        useEffect(() => {
            setTitle(book.filter(state => state.title === title))
        }, [book, title])
        
    return(
        <>
            <Header/>
            <Box as="main">
                specific book = {title},{Title}
            </Box>
            <Footer/>
        </>
    )
    
}

export default Book