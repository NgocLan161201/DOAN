import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";
import Api, { endpoints } from '../configs/Api'

const Products = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const loadProduct = async () => {
            const res = await Api.get(endpoints['product'])
            setProduct(res.data)
            console.log(res.data)
        }
        loadProduct()
    }, [])

    return (
        <>
            <div className=" text-text-dark text-center" style={{
                margin: "10px auto",
                borderRadius: "10px",
                boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
                padding: "24px",
            }}>
                <Row md={4} xs={12} style={{ margin: "10px" }}>
                    {product.map((c) =>
                        <Col>
                            <Card style={{ height: "400px" }}>
                                <Card.Img variant="top" src={c.image} style={{ height: "200px" }} />
                                <Card.Body>
                                    <Card.Link style={{ fontSize: "20px", fontWeight: "bold", textDecoration: "none" }}>{c.name}</Card.Link>
                                    <Card.Text>{c.price} VND</Card.Text>
                                    <Button variant="danger" ><BsFillCartFill /></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        </>
    )
}
export default Products;