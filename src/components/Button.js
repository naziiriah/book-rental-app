import { Button,Icon } from "@chakra-ui/react";
import { IoIosLogIn, IoIosLogOut} from "react-icons/io";
import { VscSignIn } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/Authentication/authSlice";



export const Login = () => {
    const navigation = useNavigate()

    return(
        <Button onClick={() => navigation('/login')}>
            Log In
            <Icon as ={IoIosLogIn} ml={'.7rem'}/>
        </Button>
    )
}

export  const SignUp = () => {
        const navigation = useNavigate()
    return(
        <Button onClick={() => navigation('/sign-up')}>
            Sign up
            <Icon as={VscSignIn} ml={'0.7rem'}/>
        </Button>
    )
}

export const LogOut = () => {
    
    const Dispatch = useDispatch(),
    navigation = useNavigate();
    
    function LogOut(){  
        Dispatch(logoutUser())
        navigation('/')
    }    
    return(
        <Button onClick={LogOut}> 
            Log out
            <Icon as ={IoIosLogOut} ml={'.7rem'}/>
        </Button>
    )
}

export const AddButton = () => {
    const navigate = useNavigate()

    return(
        <Button 
            colorScheme={'twitter'} 
            textTransform="capitalize"
            onClick={() => navigate('/add-book')}>
            add book
        </Button>
    )
}
