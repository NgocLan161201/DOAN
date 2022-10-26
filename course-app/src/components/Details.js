import "../static/details.css";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import Api, { endpoints, authAxios } from '../configs/Api'

const getItemFormLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]"); 


function Detail() {
    const [product, setProduct] = useState([])
    const [comments, setComments] = useState([])
    const [count, setCount] = useState();
    const [cart, setCart] = useState(getItemFormLocalStorage)
    const { productId } = useParams()
    const [user] = useContext(UserContext)

    useEffect(() => {
        const loadProduct = async () => {
            const res = await Api.get(endpoints['product-detail'](productId))           
            console.info(res.data)
            setProduct(res.data)
        }

        loadProduct()
    }, [productId])

    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    
    return (
        <Container>
            <div className="grid product d-flex">
                <div className="column-xs-12">
                    <img className="active" src={product.image} style={{ maxWidth: "100%", height: "auto", objectFit: "cover", width: "400px" }} />
                </div>
                <div className="column-xs-12">
                    <h1 style={{ fontWeight: "bold" }}>{product.name}</h1>
                    <h2>{product.price} VND</h2>
                    <p>Giới thiệu: {product.description}</p>
                    <hr />
                    <div className="section form-group" style={{ paddingBottom: '20px' }}>
                        <label style={{ marginBottom: '10px' }}><strong>Quantity: </strong></label>
                        <div className="d-flex">
                            <input defaultValue="&#10134;" className="form-control" />
                            <input type="text" defaultValue={1} className="form-control quantity" />
                            <input defaultValue="&#10133;" className=" form-control" />
                        </div>
                    </div>

                    <button className="add-to-cart" onClick={() => addToCart(product)} >Thêm vào giỏ hàng</button>
                </div>
            </div><hr />
        </Container >
    )
}
export default Detail;