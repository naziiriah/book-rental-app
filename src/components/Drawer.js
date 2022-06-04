import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Icon,
    useDisclosure,
    Link,
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
        <Drawer as={'aside'} placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
            { user ? 
                <DrawerBody>
                    <Link  href='/'>Home</Link>
                    <Link  href='/my-profile'>My profile</Link>
                    <Link  href='/authors'>Authors</Link>
                    <Link href="/:books">My recommends</Link>
                    
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