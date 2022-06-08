import { Box, Spinner } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useAllBook, } from "../Hooks/useBooks"

const Book = () => {
        const {title} = useParams(),
        { books, isLoading } = useSelector((state) => state.books),
        dispatch = useDispatch(),
        ThisBook = books.filter(state => state.title === title);
        
        useAllBook()

        if(isLoading){
            <Spinner/>
        }
        
        function RentBook(){
                dispatch()
        }

    return(
        <>
            <Header/>
            <Box as="main" onClick={() => console.log(ThisBook)}>
                specific book = {title} ,
            </Box>
            <Footer/>
        </>
    )
    
}

export default Book