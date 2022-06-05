import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Icon,
    useDisclosure,
    Link,
    Box,
  } from '@chakra-ui/react'
  import { MdOutlineViewHeadline} from "react-icons/md"

  

  const MenuSlider = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(),
    user = JSON.parse(localStorage.getItem('user'));

  
    return (
      <>
        <Icon mr={'.1rem'}
            cursor= "pointer"
            _hover={{"color":"blue.900"}}
            transition="ease-in 1s"
            fontSize ={'2.5rem'}
            onClick={onOpen}
            ml={'0.6rem'}
            as ={MdOutlineViewHeadline}/>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
            { user ? 
                <DrawerBody as={'section'}>
                  <Box  width={'100%'} height="3rem"
                        color="blue.300" borderBottomColor={"blue.800"} 
                        borderBottomWidth={'1px'} borderBottomStyle={'solid'}>
                        <Link  href='/' fontSize={'23px'}>Home</Link>
                  </Box>
                    
                  <Box  width={'100%'} height="4rem" pt="1rem"
                        color="blue.300" borderBottomColor={"blue.800"} 
                        borderBottomWidth={'1px'} borderBottomStyle={'solid'}>
                        <Link  href='/my-profile'  fontSize={'23px'}>My profile</Link>
                  </Box>

                  <Box  width={'100%'} height="4rem" pt="1rem"
                        color="blue.300" borderBottomColor={"blue.800"} 
                        borderBottomWidth={'1px'} borderBottomStyle={'solid'}>
                        <Link  href='/authors' fontSize={'23px'}>Authors</Link>
                  </Box>
                    
                  <Box  width={'100%'} height="4rem" pt="1rem"
                        color="blue.300" borderBottomColor={"blue.800"} 
                        borderBottomWidth={'1px'} borderBottomStyle={'solid'}>
                        <Link href="/:books" fontSize={'23px'}>My recommends</Link>
                  </Box>
                    
                    
                </DrawerBody>
            :   <DrawerBody>
                    <Link>im loged out</Link>
                </DrawerBody>
            }
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default MenuSlider