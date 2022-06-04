import axios from "axios"

const API_URL = '/api/'
const getAllBooks = async () =>{
    const response = await axios.get(API_URL)
    if(response.data){
        
    }
}

const getMyBooks = async () =>{
    const response = await axios.get(API_URL)
    if(response.data){
        
    }
}

const addBooks = async () =>{
    const response = await axios.get(API_URL)
    if(response.data){
        
    }
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



const bookService = {
    getAllBooks,
    getMyBooks,
    addBooks, 
    editBook, 
    deleteBook
}

export default bookService