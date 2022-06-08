import { Box, Image, Spinner,Link } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useAllBook } from "../../Hooks/useBooks"

const Author = () => {
    const {author} = useParams(),
    navigation = useNavigate(),
    {books, isLoading} = useSelector((state) => state.books ),
    AuthorBooks = books.filter(state => state.author === author);
    useAllBook()

    if(isLoading){
        <Spinner/>
    }
    
    return(
        <>
            <Header/>
            <Box as="main" width ={'80%'} 
                margin="auto" my="5rem">
                    <Box as="h2" color={'blue.600'}
                        textTransform={'capitalize'}
                        fontSize={'2xl'} width={'100%'}
                        borderBottomColor={'blue.600'}
                        borderBottomStyle={'solid'}
                        borderBottomWidth={'.2rem'}
                        >
                        {author}'s books
                    </Box>

                    {
                        AuthorBooks.map((state, index) => {
                            return(
                                <Box as='section' key={state._id}
                                    my={'1rem'} width={'100%'}
                                    height="12rem" pt={'1rem'}
                                    textTransform={'capitalize'}
                                    borderBottomColor={"blue.300"}
                                    borderBottomStyle={'solid'}
                                    borderBottomWidth={'.1rem'}
                                    display={'flex'}>
                                        <Image src={state.image ? state.image : null} 
                                            width={'8rem'} height={'8rem'} borderWidth={'.1rem'}
                                            borderStyle={'solid'} borderColor={'blue.100'} mt=".4rem"
                                        />
                                        <Box width={'80%'} mx="1rem" height={'10rem'}>
                                            <Box as={'h2'} my=".2rem" textTransform={'capitalize'} onClick={() => navigation(`/library/${state.title}`)}><Link href={`/library/${state.title}`}>Title: {state.title}</Link></Box>
                                            <Box as={'h2'} my=".2rem" textTransform={'capitalize'}>Author: {state.author}</Box>
                                            <Box as={'h2'} my=".2rem" textTransform={'uppercase'}>isbn: {state.ISBN}</Box>                                             
                                            <Box as={'h2'} my=".2rem" textTransform={'uppercase'}>No. of times rented :  {state.rented.length}</Box>
                                            {<Box as={'h2'} my=".2rem" textTransform={'uppercase'}>available for rent:  { state.rented.length < 9 ? <Box as="span">Yes</Box>: <Box as="span">No</Box>}</Box>}
                                        </Box>
                                </Box>
                            )
                        })                        
                    }
            </Box>
            <Footer/>
        </>
    )
}
export default Author