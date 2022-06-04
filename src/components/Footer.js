import { Box } from "@chakra-ui/react"

const Footer = () => {

    return(
        <Box as={'footer'} 
            width="100%" height={"7rem"}
            bgColor={'blue.300'}>
                <Box as={'h3'} 
                    color={'#fff'} textAlign={'center'}
                    fontSize="1xl" pt="2rem">
                        Copyright@ 2022

                </Box>
        </Box>
    )
}
export default Footer