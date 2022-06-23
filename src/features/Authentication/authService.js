import axios from "axios"


const API_URL = '/user/'

const register = async (userData) => {

    const response = await axios.post(API_URL, userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
}

const logout =  async () => {
    localStorage.removeItem('user')
}

const loginUser = async(userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
}
const editUserAcc = async(userData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL +'update',  userData, config )
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
}

const deleteuserAccount = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + 'delete', config)
    if(response.data){
        localStorage.removeItem('user')
    }

}

const CurrentUser =  async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL+ 'user', config)
    if(response.data){ 
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
const authService = {
    register,
    loginUser,
    logout,
    editUserAcc, 
    deleteuserAccount,
    CurrentUser
}

export default authService