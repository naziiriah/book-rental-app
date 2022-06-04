import { Box, Icon, Text } from "@chakra-ui/react"
import { Login, LogOut, SignUp } from "./Button"
import { GiBookshelf } from 'react-icons/gi'
import MenuSlider from "./Drawer"

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

                    <MenuSlider/>
                </Box>

                <Box display={'flex'}>
                    <Icon fontSize ={'2.5rem'}
                    mt={"-0.2rem"}
                    color={'#fff'}
                    as={GiBookshelf}/>
                    <Box as ={'h1'} 
                        textTransform={'uppercase'}
                        color={'#fff'}
                        textAlign="center"
                        ml="1rem"
                        height={'4rem'}
                        fontSize={'23px'}>
                        The great Book Shelf<Text as ={'span'} textTransform={'lowercase'}>.com</Text>
                </Box>
                </Box>
                
                {
                    !user ?
                    <Box display={'flex'}
                    width="16rem"
                        justifyContent={'space-around'}>
                            <Login/>
                            <SignUp/>
                    </Box> :
                     <Box 
                     width="10rem">
                       <LogOut/>
                     </Box>
                }
               
                
            
        </Box>
    )
}

export default Header