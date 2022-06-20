import { Button,Icon } from "@chakra-ui/react";
import { IoIosLogIn, IoIosLogOut} from "react-icons/io";
import { VscSignIn } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, logoutUser } from "../features/Authentication/authSlice";
import { rentBook } from "../features/Books/bookSlice";



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
        <Button onClick={LogOut} color={'blue.900'}> 
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

export const RentBook = ({id}) => {
    const dispatch = useDispatch()

    function rent(){
        dispatch(rentBook(id))
    }

    return(
        <Button onClick={rent}
            colorScheme={'twitter'} 
            textTransform={'capitalize'}>
            Rent Book
        </Button>
    )
}

export const EditBook = ({title, id}) => {
    const navigate = useNavigate()
    return(
        <Button colorScheme={'twitter'}
            textTransform={'capitalize'}
            onClick={
                () => navigate(`/my-profile/my-books/${title}}/update`, {state:{id: id}})}>
            edit book details
        </Button>
    )
}

export const DeleteBook = () => {
    const dispatch = useDispatch(),
    navigate = useNavigate()

    function deleteBook(){
        dispatch()
        navigate('/')
    }
    return(
        <Button 
            colorScheme={'red'}
            onClick={deleteBook}
            
            >
            Delete book
        </Button>
    )
}

export const DeleteUser = () => {
    const dispatch = useDispatch(),
    navigate = useNavigate()

    function deleteuser(){
        dispatch(deleteUser())
        navigate('/login')
    }
    return(
        <Button 
            textTransform={'capitalize'}
            colorScheme={'red'} onClick={() => deleteuser()}>
            delete user
        </Button>
    )
}