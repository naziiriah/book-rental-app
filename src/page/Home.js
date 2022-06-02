import { Box } from "@chakra-ui/react"
import Header from "../components/Header"
import { Spin } from "../components/Spinner"

const Home = () => {

    return(
        <>
            <Header/>
            <Box>
                <Spin/>
            </Box>
        </>
    )
}

export default Home