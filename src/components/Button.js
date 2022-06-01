import { Button,Icon } from "@chakra-ui/react";
import { IoIosLogIn, IoIosLogOut} from "react-icons/io";
import { VscSignIn } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";



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

    return(
        <Button>
            Log out
            <Icon as ={IoIosLogOut} ml={'.7rem'}/>
        </Button>
    )
}

export const Addbook = () => {

}
