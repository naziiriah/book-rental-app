import { Box, Icon, Text } from "@chakra-ui/react"
import { Login, LogOut, SignUp } from "./Button"
import { GiWhiteBook } from "react-icons/gi"

const Header = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    return(
        <Box as="header"
            height={"6rem"}
            width={'100%'}
            pt="2rem"
            backgroundColor={'blue.300'}
            display={'flex'}
            justifyContent={'space-between'}>

                <Box as= {'h1'}
                    color={'#fff'}>

                    <Icon mr={'.1rem'}
                         fontSize ={'2.5rem'}
                         as ={GiWhiteBook}/>
                </Box>

                <Box as ={'h1'} 
                    textTransform={'uppercase'}
                    color={'#fff'}
                    height={'4rem'}
                    fontSize={'23px'}>
                    Book rental<Text as ={'span'} textTransform={'lowercase'}>.com</Text>
                </Box>
                
                {
                    !user ?
                    <Box display={'flex'}
                    width="16rem"
                        justifyContent={'space-around'}>
                            <Login/>
                            <SignUp/>
                    </Box> :
                     <Box display={'flex'}
                     width="16rem">
                       <LogOut/>
                     </Box>
                }
               
                
            
        </Box>
    )
}

export default Header