import "./App.css";
import React, { createContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import myReducer from "./reducer/UserReducer";
import Login from "./components/Login";
import Detail from './components/Details';
import Cart from './components/Cart';
import Products from './components/Products';
import cookies from 'react-cookies';
import Base from "./Base";
import Register from './components/Register';
import { CartProvider } from "./context/CartContext";

export const UserContext = createContext();
export const ListRouteContext = createContext();

function App() {
  const [user, dispatch] = useReducer(myReducer, cookies.load("user"));
  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, dispatch]}>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:productId/" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </CartProvider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
