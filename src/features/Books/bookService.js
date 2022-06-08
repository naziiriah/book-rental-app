import axios from "axios"

const API_URL = '/api'
const getAllBooks = async () =>{
    const response = await axios.get(API_URL )
    return response.data
}

const getMyBooks = async (token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+'/mybooks',config)
    return response.data
}

const addBooks = async (bookData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, bookData, config)

    return response.data
}

const editBook = async () =>{
    const response = await axios.get(API_URL)
    if(response.data){
        
    }
}

const deleteBook = async () =>{
    const response = await axios.get(API_URL)
    if(response.data){
        
    }
}
 const updateRentStatus = async ( id,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + `/rent/` + id, config)
    return response.data
 }


const bookService = {
    getAllBooks,
    getMyBooks,
    addBooks, 
    editBook, 
    deleteBook,
    updateRentStatus
}

export default bookService