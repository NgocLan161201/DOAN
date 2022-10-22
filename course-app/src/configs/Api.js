import axios from 'axios'
import cookies from 'react-cookies'

export const endpoints = {
    'category': '/category',
    'product': '/product/',
    'product-detail': (productId) => `/product/${productId}/`,
    'product-comments': (productId) => `/product/${productId}/comments/`,
    'comments': '/comments/',
    'users': '/users/',
    "login": "/o/token/",
    "current-user": "/users/current-user/",
}

export const authAxios = () => axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        'Authorization': `Bearer ${cookies.load('access_token')}`,
        "Content-Type": "multipart/form-data",
    }
})

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})