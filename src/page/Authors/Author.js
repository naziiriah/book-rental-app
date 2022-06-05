import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Author = () => {
    const {author} = useParams(),
    {books} = useSelector((state) => state.books ),
    [authrBooks, setauthrBooks] = useState([]);

    // useEffect(() => {
    //     //  setauthrBooks(books.filter((book) => book.author === author))
    // }, [books, author])
    
    return(
        <>
            <Header/>
            <Box as="main">
            author name = {author}, {authrBooks}
            </Box>
            <Footer/>
        </>
    )
}
export default Author