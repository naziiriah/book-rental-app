import { Box, Image, Spinner, } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation} from "react-router-dom"
import { RentBook } from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { getAllBooks } from "../features/Books/bookSlice"
import { useAllBook, } from "../Hooks/useBooks"


const Book = () => { 
    const location  = useLocation(),
    Books = JSON.parse(localStorage.getItem('Books')),
    ThisBook = Books.find(state => state._id === location.state.id)      
    
    return(
        <>
            <Header/>
            <Box as="main" 
                width={'80%'} margin={'auto'}
                height={'25rem'}>
                <Box as={'aside'} mt={'3rem'}
                    width={'100%'} display={'flex'}
                    justifyContent={'flex-end'}>    
                    {ThisBook.rented.length < 10 &&   <RentBook  id={ThisBook._id}/>}
                </Box>

                <Box as={'section'} mt={'3rem'}
                    width={'100%'} 
                    display={'flex'}>

                    <Box width="10rem" height="13rem" 
                        borderColor={'twitter.100'}
                        borderStyle={'solid'}
                        borderWidth={'.1rem'}>
                            <Image src={ThisBook.image} height={'13rem'} width={'10rem'}/>
                    </Box>                        
                    <Box width="100%" mx="1rem" height="12rem" 
                        pt=".5rem" px={'1rem'}>
                            <Box as='p' fontSize={'20px'} height="2.5rem" textTransform={'capitalize'} >title: <Box as={'span'} color="twitter.800">{ThisBook.title}</Box></Box> 
                            <Box as='p' fontSize={'20px'} height="2.5rem" textTransform={'capitalize'} >Author:<Box as={'span'} color="twitter.800">{ThisBook.author}</Box></Box> 
                            <Box as='p' fontSize={'20px'} height="2.5rem"textTransform={'capitalize'} >ISBN:<Box as={'span'} color="twitter.800">{ThisBook.ISBN}</Box></Box> 
                            <Box as='p' fontSize={'20px'} height="2.5rem" textTransform={'capitalize'} >No of Times Rented:<Box as={'span'} color="twitter.800">{ThisBook.rented.length}</Box></Box> 
                            <Box as='p'  fontSize={'20px'} height="2.5rem" textTransform={'capitalize'} >available for rent: {ThisBook.rented.length < 10 ? <Box as={'span'} color="twitter.800">Yes</Box> : <Box as={'span'} color="twitter.800">No</Box> }</Box> 
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </>
    )
    
}

export default Book