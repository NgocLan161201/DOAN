import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../App";
import Api, { endpoints } from "../configs/Api";
const getItemFormLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Payment = () => {
    const [cart, setCart] = useState(getItemFormLocalStorage)
    const [addressState, setaddressState] = useState()
    const [phoneState, setPhoneState] = useState()
    const [isAdded, setIsAdded] = useState(false);
    const nav = useNavigate();

    const [user, dispatch] = useContext(UserContext)

    const getTotalSum = () => {
        return cart.reduce(
            (sum, { price, quantity }) => sum + price * quantity,
            0
        );
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    let total = getTotalSum();

    const pay = async () => {
        let resOrderState = await Api.post(endpoints['order'], {
            phone: phoneState,
            address: addressState,
            amount: total,
            user: user.id,
        });
        let orderID = resOrderState.data.id

        cart.map(async (product) => {
            const res = await Api.post(endpoints["order-details"], {
                order: orderID,
                product: product.id,
                unit_price: product.price,
                numb: product.quantity,
            });
        })
        setIsAdded(true);
    }

    const handleClick = () => {
        pay();
        clearCart();
    }

    return (
        <>
            {!isAdded ?
                <>
                    < div style={{
                        margin: "10px auto",
                        width: "80%",
                        borderRadius: "16px",
                        boxShadow: "4px 4px 20px 1px hsl(0deg 0% 55% / 40%)",
                        padding: "24px",
                    }}>
                        <div style={{ margin: "20px auto" }}>
                            <div style={{ textAlign: "left" }}>
                                <>
                                    <h3 style={{ fontWeight: "bold" }}> ????N H??NG C???A B???N </h3>
                                    <p> H??? v?? t??n ng?????i nh???n:<strong>  {user.first_name} {user.last_name}  </strong> </p>
                                    <p> S??? ??i???n tho???i ng?????i nh???n:  <strong> {phoneState} </strong> </p>
                                    <p> ?????a ch??? ng?????i nh???n:  <strong> {addressState} </strong>  </p>
                                    <hr />
                                    <p style={{
                                        color: "#3e3e3f",
                                        fontSize: "1rem",
                                        letterSpacing: "0.0625rem",
                                        textDecoration: "none",
                                    }}> THAY ?????I TH??NG TIN NH???N H??NG :</p>
                                </>
                            </div>
                        </div>

                        <Form.Group style={{ borderRadius: "10px", marginBottom: "24px" }}>
                            <Form.Label style={{
                                color: "#3e3e3f",
                                fontSize: "1rem",
                                letterSpacing: "0.0625rem",
                                textDecoration: "none",
                            }}>S??? ??i???n tho???i ng?????i nh???n:</Form.Label>
                            <Form.Control type="number" placeholder="Nh???p s??? ??i???n tho???i" value={phoneState} onChange={e => setPhoneState(e.target.value)} />
                        </Form.Group>
                        <Form.Group style={{ borderRadius: "10px", marginBottom: "24px" }}>
                            <Form.Label style={{
                                color: "#3e3e3f",
                                fontSize: "1rem",
                                letterSpacing: "0.0625rem",
                                textDecoration: "none",
                            }}>?????a ch??? ng?????i nh???n:</Form.Label>
                            <Form.Control type="text" placeholder="Nh???p ?????a ch???" value={addressState} onChange={e => setaddressState(e.target.value)} />
                        </Form.Group>

                        <div style={{ margin: "20px auto" }}>
                            <div style={{ textAlign: "left" }}>
                                <p style={{
                                    color: "#3e3e3f",
                                    fontSize: "1rem",
                                    letterSpacing: "0.0625rem",
                                    textDecoration: "none",
                                }}>Th??nh ti???n: <strong> {total} VND </strong></p>
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

                        }} onClick={() => handleClick()}>
                            Thanh To??n
                        </Button>
                    </div>
                </>
                :
                <>
                    <p style={{
                        color: "red",
                        padding: "1rem 0",
                        fontSize: "1rem",
                        letterSpacing: "0.0625rem",
                    }} >THANH TO??N TH??NH C??NG !</p>
                    <p>Tr??? v???
                        <strong>
                            <Link to="/" style={{
                                color: "red",
                                padding: "1rem 0", 
                                fontSize: "1rem",
                                letterSpacing: "0.0625rem",
                                textDecoration: "none",

                            }}> Trang Ch???</Link>
                        </strong>
                    </p>
                </>}
        </>
    )

}
export default Payment