import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { getAllBooks } from "../../features/Books/bookSlice"
import { useAllBook } from "../../Hooks/useBooks"

const Authors = () => {
    const dispatch = useDispatch()
    useAllBook()
    return(
        <>
        <Header/>
        <Box as="main">
            
        </Box>
        <Footer/>
        </>
    )
}
export default Authors