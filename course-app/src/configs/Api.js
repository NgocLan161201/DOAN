import axios from 'axios'
import cookies from 'react-cookies'

export const endpoints = {
    'category': '/category',
    'product': '/product/',
    'product-detail': (productId) => `/product/${productId}/`,
    'product-comments': (productId) => `/product/${productId}/comments/`,
    'comments': '/comments/',
    'users': '/users/',
    "oauth2-info": "/oauth2-info/",
    "login": "/o/token/",
    "current-user": "/users/current-user/",
    "register": "/users/",
}

export const authApi = () => {
    return axios.create({
        baseURL: "http://127.0.0.1:8000/",
        headers: {
            'Authorization': `Bearer ${cookies.load('token')}`
        }
    })
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})