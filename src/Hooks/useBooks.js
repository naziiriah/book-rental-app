import { useEffect } from "react"
import { useDispatch } from "react-redux"
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