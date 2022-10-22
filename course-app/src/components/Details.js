import "../static/details.css";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import Api, { endpoints, authAxios } from '../configs/Api'


function Detail() {
    const [product, setProduct] = useState()
    const [comments, setComments] = useState([])
    const { productId } = useParams()
    const [user] = useContext(UserContext)

    useEffect(() => {
        const loadProduct = async () => {
            const res = await authAxios().get(endpoints['product-detail'](productId))
            console.info(res.data)
            setProduct(res.data)
        }
        loadProduct()
    }, [])

    return (
        <Container>
            <div className="grid product d-flex" key={product.productId}>
                <div className="column-xs-12">
                    <img className="active" src={product.image} style={{ maxWidth: "100%", height: "auto", objectFit: "cover", width: "600px" }} />
                </div>
                <div className="column-xs-12">
                    <h1 style={{ fontWeight: "bold" }}>{product.name}</h1>
                    <h2>{product.price} VND</h2>
                    <hr />
                    <div className="section form-group" style={{ paddingBottom: '20px' }}>
                        <label style={{ marginBottom: '10px' }}><strong>Quantity: </strong></label>
                        <div className="d-flex">
                            <input defaultValue="&#10134;" className="form-control btn-minus" />
                            <input type="text" defaultValue={1} className="form-control quantity" id="quantity" />
                            <input defaultValue="&#10133;" className=" form-control btn-plus" />
                        </div>
                    </div>

                    <button className="add-to-cart">Đặt Hàng</button>
                </div>
            </div><hr />
        </Container >
    )
}
export default Detail;