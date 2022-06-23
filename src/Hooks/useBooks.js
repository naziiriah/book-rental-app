import { useEffect} from "react"
import { useDispatch} from "react-redux"
import { getCurrentUser } from "../features/Authentication/authSlice"
import { getAllBooks, getMyBooks } from "../features/Books/bookSlice"

export const useAllBook = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllBooks())
    }, [dispatch])
}

export const useMyBooks = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyBooks())
    }, [dispatch])
}

export const useUser = () => {

    const dispatch = useDispatch(),
    user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        dispatch(getCurrentUser(user.token))
    })
}
