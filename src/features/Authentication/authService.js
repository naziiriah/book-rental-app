import axios from "axios"


const API_URL = 'user/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData )

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
const authService = {
    register,
    loginUser,
    logout
}

export default authService