import { Box, Spinner, Grid, Link} from "@chakra-ui/react"
import { useEffect, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AddButton } from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { getAllBooks } from "../features/Books/bookSlice"


const Home = () => {
    const navigate = useNavigate(),
    dispatch = useDispatch(),
    {isLoading} = useSelector((state) => state.books),
    navigation = useNavigate(),
    Books = JSON.parse(localStorage.getItem('Books'));
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user){
            navigate('/login')           
        }   
        dispatch(getAllBooks())
    }, [dispatch, navigate])
    
    return(
        <>
            <Header/>
           { isLoading ? 
                <Spinner/>
            :   <Box as={'main'} 
                width="80%" margin="auto">
                    <Box as="aside" 
                        height={"6rem"} display={'flex'}
                        justifyContent={'flex-end'}
                        width="100%" marginTop={'4rem'}>
                            <AddButton/>
                    </Box>
                    <Box as="section"
                        width="100%">

                    {!Books.message ? 
                            <Grid templateColumns='repeat(3, 1fr)' mb='5rem' gap={6} width="100%">
                            { Books.map(state => (
                                <Box key={state._id} width='80%' cursor={'pointer'}
                                    height={'12rem'} bgColor="twitter.300" display={'grid'}>
                                             <Box
                                                width={'90%'} height={'7rem'} mx='5%' 
                                                mt=".4rem" textAlign={'center'}
                                                fontSize={'20px'} fontWeight={'bold'} color={'#000'}
                                                onClick={() => navigation(`/home/${state.title}`, 
                                                    {state:{name:state.title, id:state._id }})}>
                                                        No Image!!
                                            </Box>
                                            
                                            <Box width="100%" display={'grid'}>
                                                <Box my=".1rem" textTransform={'capitalize'} 
                                                onClick={() => navigation(`/home/${state.title}`, 
                                                    {state:{name:state.title, id:state._id }} )}>
                                                        <Box as={'h2'} m={'auto'} my=".1rem" 
                                                            _hover={{'color':"#fff"}} transition='ease-in .5s'
                                                            width={'100%'} textAlign={'center'} 
                                                            textTransform={'capitalize'}>
                                                                    {state.title}
                                                        </Box>                                                            
                                                </Box>
                                                <Box as={'h2'} m={'auto'} my=".1rem" 
                                                    width={'100%'} textAlign={'center'} 
                                                    _hover={{'color':"#fff"}} transition='ease-in .5s'
                                                    textTransform={'capitalize'}>
                                                         {state.author}
                                                </Box>                                              
                                            </Box>
                                </Box>
                            ))}
                            </Grid>
                            :
                            <Box width={'100%'} mb={'4rem'}
                            transition={'ease-in .3s'} cursor={'pointer'}
                            _hover={{color:'blue.300',backgroundColor:'#fff'}}
                            textTransform={'capitalize'} fontSize
                            backgroundColor={'blue.300'} py="1.9rem"
                            color={'#fff'} textAlign={'center'}
                            height ="6rem">
                                Error in obtaining Books
                            </Box>
                        }
                        
                    </Box>
                </Box>
            }
            <Footer/>
        </>
    )
}

export default Home