import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookService from "./bookService";

const initialState = {
    books: [],
    isSuccess: false,
    isError: false,
    isLoading:false,
    message:"",
    rental:[],
};

export const getAllBooks = createAsyncThunk(
    'book/allBooks',
    async(user, thunkAPI )=>{
        try{
            return bookService.getAllBooks()
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)      
        }
    },
)

export const getMyBooks = createAsyncThunk(
    'book/myBooks',
    async(user, thunkAPI) =>{
      try{
            return bookService.getMyBooks()
      }
      catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
      }
    }
)


export const AddBook = createAsyncThunk(
    'book/addBooks',
    async(user, thunkAPI) =>{
      try{
            return bookService.addBooks()
      }
      catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
      }
    }
)

export const EditBook = createAsyncThunk(
    'book/editBooks',
    async(user, thunkAPI) =>{
      try{
            return bookService.editBook()
      }
      catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
      }
    }
)

export const DeleteBook = createAsyncThunk(
    'book/deleteBooks',
    async(user, thunkAPI) =>{
      try{
            return bookService.deleteBook()
      }
      catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
      }
    }
)

export const BookSlice = createSlice({
    name:'book',
    initialState,
    reducers: {
            reset: () => initialState
    },
    extraReducers: (builders) =>{

    }
})

export const { reset } = BookSlice.actions
export default BookSlice.reducer

