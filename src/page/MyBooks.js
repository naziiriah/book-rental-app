import { Box, Image, Link, Spinner } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { DeleteBook, EditBook } from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useMyBooks } from "../Hooks/useBooks"


const MyBooks = () => {
    useMyBooks()
    const Mybook = JSON.parse(localStorage.getItem('MyBooks')),
    navigation = useNavigate(),
    {isLoading} = useSelector(state => state.books)
    

    return(
        <>
            <Header/>
           { isLoading ? 
                <Spinner/> :
                <Box as="main" 
                    margin={'auto'}
                    width={'80%'}>
                    {
                        Mybook && Mybook.length > 0? 
                        Mybook.map((state, id) => {
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
                                            
                                            <Box width="80%" height={'100%'} display={'flex'} justifyContent={'space-between'}>
                                                    <Box width={'50%'} mx="1rem" height={'10rem'}>
                                                        <Box as={'h2'} my=".2rem" textTransform={'capitalize'} 
                                                            onClick={() => navigation(`/home/${state.title}`, 
                                                                {state:{name:state.title, id:state._id }} )}>
                                                                    <Link href={`/home/${state.title}`}>Title: {state.title}</Link>
                                                        </Box>
                                                        <Box as={'h2'} my=".2rem" textTransform={'capitalize'}>Author: {state.author}</Box>
                                                        <Box as={'h2'} my=".2rem" textTransform={'uppercase'}>isbn: {state.ISBN}</Box>                                             
                                                        <Box as={'h2'} my=".2rem" textTransform={'uppercase'}>No. of times rented :  {state.rented.length}</Box>
                                                        {<Box as={'h2'} my=".2rem" textTransform={'uppercase'}>available for rent:  { state.rented.length < 9 ? <Box as="span">Yes</Box>: <Box as="span">No</Box>}</Box>}
                                                    </Box>
                                                    <Box display='grid'width={'20%'}>
                                                        <EditBook/>
                                                        <DeleteBook/> 
                                                    </Box>                                                
                                            </Box>
                                </Box>
                            )
                    }) :
                            <Box as="section" 
                                width={'100%'} my={'4rem'}
                                transition={'ease-in .3s'} cursor={'pointer'}
                                _hover={{color:'blue.300',backgroundColor:'#fff'}}
                                textTransform={'capitalize'} fontSize
                                backgroundColor={'blue.300'} py="1.9rem"
                                color={'#fff'} textAlign={'center'}
                                height ="6rem">
                                You have added no book to the library
                            </Box>
                }
                </Box>
            }
            <Footer/>
        </>
    )
}

export default MyBooks