import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async(user, thunkAPI) => {
        try{
            return await authService.register(user)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
             return thunkAPI.rejectWithValue(message)
        }
    }
)
export const loginUser = createAsyncThunk(
    "auth/login",
    async(user, thunkAPI) => {
        try {
            return authService.loginUser(user)
        } catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async(user, thunkAPI) => {
        try{
<<<<<<< HEAD
            return authService.logout()
=======
            return authService.logout
>>>>>>> ffb6200da59341274cce78f8be278c28407d42ae
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        reset : (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase( registerUser.pending,  (state)=> {
<<<<<<< HEAD
            state.isLoading =  true
=======
            state.isError =false
            state.isSuccess = false
            state.isLoading =  false
            state.message =  ""
>>>>>>> ffb6200da59341274cce78f8be278c28407d42ae
        })
        .addCase(registerUser.fulfilled, (state, action )=> {
            state.isError =false
            state.isSuccess = true
            state.isLoading =  false
            state.message =  ""
<<<<<<< HEAD
            state.user = action.payload  
        })
        .addCase(registerUser.rejected, (state, action )=> {
            state.isError =true
            state.isSuccess = false
=======
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state, action )=> {
            state.isError =true
            state.isSuccess = true
>>>>>>> ffb6200da59341274cce78f8be278c28407d42ae
            state.isLoading =  false
            state.message = action.payload
            state.user = null
        })
        .addCase( loginUser.pending,  (state)=> {
            state.isLoading =  true            
        })
        .addCase(loginUser.fulfilled, (state, action )=> {
            state.isError =false
            state.isSuccess = true
            state.isLoading =  false
            state.user = action.payload
        })
        .addCase(loginUser.rejected, (state, action )=> {
            state.isError =true
            state.isLoading =  false
            state.message = action.payload
            state.user = null
        })
        .addCase(logoutUser.fulfilled, (state, action )=> {
            state.isError =false
            state.isSuccess = true
            state.isLoading =  false
            state.message =  ""
            state.user = null
        })
    }
})

export const { reset } = AuthSlice.actions
<<<<<<< HEAD
export default AuthSlice.reducer
=======
export default AuthSlice.reducer
>>>>>>> ffb6200da59341274cce78f8be278c28407d42ae
