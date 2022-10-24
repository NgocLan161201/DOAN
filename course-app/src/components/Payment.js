import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import Api, { endpoints } from "../configs/Api";
const getItemFormLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Payment = (prop) => {
    const [cart, setCart] = useState(getItemFormLocalStorage)
    const [addressState, setaddressState] = useState()
    const [phoneState, setPhoneState] = useState()
    const [orderState, setOrderState] = useState([])

    const [user, dispatch] = useContext(UserContext)

    const { userId } = useParams()


    const getTotalSum = () => {
        return cart.reduce(
            (sum, { price, quantity }) => sum + price * quantity,
            0
        );
    };

    let total = getTotalSum();
    useEffect(() => {

    })
    const pay = async () => {
        const resOrderState = await Api.post(endpoints['order'], {
            phone: phoneState,
            address: addressState,
            amount: total,
            user: user.id,
        });
        setOrderState(resOrderState.data)
        alert("Dien thong tin thanh cong")
    }


    return (
        <>
            
            <div style={{
                margin: "10px auto",
                width: "80%",
                borderRadius: "16px",
                boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
                padding: "24px",
            }}>
                <div style={{ margin: "20px auto" }}>
                    <div style={{ textAlign: "left" }}>
                        {user != null ?
                            <>
                                <h3 style={{ fontWeight: "bold" }}> ĐƠN HÀNG CỦA BẠN </h3>
                                <p> Họ và tên người nhận:<strong>  {user.first_name} {user.last_name}  </strong> </p>
                                <p> Số điện thoại người nhận:  <strong> {phoneState} </strong> </p>
                                <p> Địa chỉ người nhận:  <strong> {addressState} </strong>  </p>
                                <hr />
                                <p style={{
                                    color: "#3e3e3f",
                                    fontSize: "1rem",
                                    letterSpacing: "0.0625rem",
                                    textDecoration: "none",
                                }}> THAY ĐỔI THÔNG TIN NHẬN HÀNG :</p>
                            </>
                            : <td></td>
                        }
                    </div>
                </div>

                <Form.Group style={{ borderRadius: "10px", marginBottom: "24px" }}>
                    <Form.Label style={{
                        color: "#3e3e3f",
                        fontSize: "1rem",
                        letterSpacing: "0.0625rem",
                        textDecoration: "none",
                    }}>Số điện thoại người nhận:</Form.Label>
                    <Form.Control type="number" placeholder="Nhập số điện thoại" value={phoneState} onChange={e => setPhoneState(e.target.value)} />
                </Form.Group>
                <Form.Group style={{ borderRadius: "10px", marginBottom: "24px" }}>
                    <Form.Label style={{
                        color: "#3e3e3f",
                        fontSize: "1rem",
                        letterSpacing: "0.0625rem",
                        textDecoration: "none",
                    }}>Địa chỉ người nhận:</Form.Label>
                    <Form.Control type="text" placeholder="Nhập địa chỉ" value={addressState} onChange={e => setaddressState(e.target.value)} />
                </Form.Group>

                <div style={{ margin: "20px auto" }}>
                    <div style={{ textAlign: "left" }}>
                        <p style={{
                            color: "#3e3e3f",
                            fontSize: "1rem",
                            letterSpacing: "0.0625rem",
                            textDecoration: "none",
                        }}>Thành tiền: <strong> {total} VND </strong></p>
                    </div>
                </div>

                <Button type="submit" style={{
                    background: "#3e3e3f",
                    color: "#fff",
                    boder: "none",
                    padding: "1rem 1.5rem",
                    fontSize: "1rem",
                    textTransform: 'uppercase',
                    cursor: "pointer",
                    letterSpacing: "0.0625rem",

                }} onClick={() => pay()}>
                    Thanh Toán
                </Button>
            </div>

        </>
    )

}
export default Payment