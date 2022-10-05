import React, { useContext } from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserAlt } from "react-icons/fa";
import { UserContext } from './../App';
import cookies from 'react-cookies';
// import { CartContext } from "../context/CartContext";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
    const [user, dispatch] = useContext(UserContext)
    const logout = (evt) => {
        evt.preventDefault()
        cookies.remove('token')
        cookies.remove('user')
        dispatch({ "type": "logout" })
    }
    // const { cart } = useContext(CartContext);

    // let cookie = cookies.load('user')

    let btn = (
        <NavDropdown.Item href="/login">Đăng Nhập</NavDropdown.Item>
    );
    if (user != null)
        btn = (
            <>
                <NavDropdown.Item href="javascript:;">
                    <img src={user.avatar} style={{ width: "40px", height: "40px", borderRadius: "50%", margin: "0 10px" }} />
                    {user.username}
                </NavDropdown.Item>
                <div className="nav-link text-danger Nav-Hover" style={{ width: "auto" }}>
                    {/* <img src={cookie.avatar_path} style={{width:"40px", height:"40px", borderRadius: "50%", margin:"0 10px"}}/>
        {cookie.username} */}
                    <img src={user.avatar} style={{ width: "40px", height: "40px", borderRadius: "50%", margin: "0 10px" }} />
                    {user.username}
                </div>
                <NavDropdown.Item href="javascript:;" onClick={logout}>Đăng Xuất</NavDropdown.Item>
            </>
        );
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#E0FFFF", color: "#000" }}>
            <div className="container">
                <Link to="/" className="navbar-brand" style={{ fontSize: "30px", fontWeight: "bold" }}>eSocial-Mart </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Trang Chủ</Nav.Link>
                        <NavDropdown title="Thức ăn và Nước uống" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/food">Thức ăn</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Nước uống</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Sản phẩm và Dịch vụ" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sản phẩm</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Dịch vụ </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-10"
                            aria-label="Search" />
                        <Button type="submit" variant="primary"> Tìm </Button>
                    </Form>
                </Navbar.Collapse>
                <Nav style={{ marginLeft: "20px" }}>
                    <NavDropdown title={<FaUserAlt />} id="basic-nav-dropdown">
                        {btn}
                    </NavDropdown>
                </Nav>
                <Nav style={{ marginLeft: "20px" }}>
                    <BsCartFill />
                </Nav>
            </div>
        </Navbar>
    )
}

export default Header