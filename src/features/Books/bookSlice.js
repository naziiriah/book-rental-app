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
            return await thunkAPI.rejectWithValue(message)      
        }
    },
)

export const getMyBooks = createAsyncThunk(
    'book/myBooks',
    async(user, thunkAPI) =>{
      try{
        const token = thunkAPI.getState().auth.user.token
            return await bookService.getMyBooks(token)
      }
      catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
      }
    }
)


export const AddBooks = createAsyncThunk(
    'book/addBooks',
    async(bookData, thunkAPI) =>{
      try{
            const token = thunkAPI.getState().auth.user.token
            return await bookService.addBooks(bookData, token)
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
            return await bookService.editBook()
      }
      catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
        return thunkAPI.rejectWithValue(message)
      }
    }
)

export const rentBook = createAsyncThunk(
    'book/rent',
    async(id, thunkAPI) => {
      try{
        const token = thunkAPI.getState().auth.user.token
        return await bookService.updateRentStatus(id ,token)
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
            return await bookService.deleteBook()
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
        builders
          .addCase(AddBooks.pending, state => {
              state.isLoading = true
            })
            .addCase(AddBooks.fulfilled, (state, action) => {
              state.isLoading = false
              state.isSuccess = true
              state.books.push(action.payload)
            })
            .addCase(AddBooks.rejected, (state, action) => {
              state.isLoading = false
              state.isError = true
              state.isSuccess = false
              state.message = action.payload
            })
          .addCase( getAllBooks.fulfilled, 
            (state, action )=> {
              state.isLoading = false
              state.isError = false
              state.isSuccess = true
              state.books = action.payload
            })
            .addCase( getMyBooks.fulfilled, 
              (state, action )=> {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.books = action.payload
              })

    }
})

export const { reset } = BookSlice.actions
export default BookSlice.reducer

