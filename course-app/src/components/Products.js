import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import Api, { endpoints } from '../configs/Api';
import { BsFillCartFill } from 'react-icons/bs';

import { CartContext } from './../context/CartContext';

const Products = ({ setCart, cart }) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const loadProduct = async () => {
            const res = await Api.get(endpoints['product'])
            setProduct(res.data)
        }
        loadProduct()
    }, [])

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


    return (
        <>
            <div className=" text-text-dark text-center" style={{
                margin: "10px auto",
                borderRadius: "10px",
                boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
                padding: "24px",
            }}>
                <Row md={4} xs={12} style={{ margin: "10px" }}>
                    {product.map((product, idx) => (
                        <Col>
                            <Card style={{ height: "400px" }}>
                                <Card.Img variant="top" src={product.image} style={{ height: "200px" }} />
                                <Card.Body>
                                    <Card.Link style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "none" }}>{product.name}</Card.Link>
                                    <Card.Text>{product.price} VND</Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ background: "#fff" }}>
                                    <CartContext.Consumer>
                                    { ({addToCart}) =>  <Button variant="danger" style={{ width: "100%", bottom: "0" }} onClick={() => addToCart(product)}><BsFillCartFill /> Thêm vào giỏ hàng </Button> }
                                    </CartContext.Consumer>                                   
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}
export default Products;