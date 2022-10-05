import "../static/details.css";
import React from "react";
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';


function Detail() {
    return (
        <Container>
            <div className="grid product d-flex" >
                <div className="column-xs-12">
                    <img className="active" src="https://cdn.tgdd.vn/Products/Images/3364/79791/bhx/snack-pho-mat-mieng-oishi-goi-39g-202205171429562080_300x300.jpg" style={{ maxWidth: "100%", height: "auto", objectFit: "cover", width: "600px" }} />
                </div>
                <div className="column-xs-12">
                    <h1 style={{ fontWeight: "bold" }}>Bonsai</h1>
                    <h2>$19.99</h2>
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
            </div><hr /><h4 style={{ fontWeight: "bold" }}>CÁC SẢN PHẨM KHÁC</h4><Row md={4} xs={12} style={{ margin: "10px" }} className="text-center">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://kenh14cdn.com/2017/photo-4-1508068499766.jpg" style={{ height: "250px" }} />
                        <Card.Body>
                            <Card.Link style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "none" }}>THUC AN</Card.Link>
                            <Card.Text>1500$</Card.Text>
                            <Button variant="danger" style={{ width: "100%" }}> <BsFillCartFill /> Thêm vào giỏ hàng </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://kenh14cdn.com/2017/photo-4-1508068499766.jpg" style={{ height: "250px" }} />
                        <Card.Body>
                            <Card.Link style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "none" }}>THUC AN</Card.Link>
                            <Card.Text>1500$</Card.Text>
                            <Button variant="danger" style={{ width: "100%" }}><BsFillCartFill /> Thêm vào giỏ hàng </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://kenh14cdn.com/2017/photo-4-1508068499766.jpg" style={{ height: "250px" }} />
                        <Card.Body>
                            <Card.Link style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "none" }}>THUC AN</Card.Link>
                            <Card.Text>1500$</Card.Text>
                            <Button variant="danger" style={{ width: "100%" }}><BsFillCartFill /> Thêm vào giỏ hàng </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://kenh14cdn.com/2017/photo-4-1508068499766.jpg" style={{ height: "250px" }} />
                        <Card.Body>
                            <Card.Link style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "none" }}>THUC AN</Card.Link>
                            <Card.Text>1500$</Card.Text>
                            <Button variant="danger" style={{ width: "100%" }}><BsFillCartFill /> Thêm vào giỏ hàng</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}
export default Detail;