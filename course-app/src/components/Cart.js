import React from 'react';
import { Table } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Cart = ({ cart, setCart }) => {
    const getTotalSum = () => {
        return cart.reduce(
            (sum, { price, quantity }) => sum + price * quantity,
            0
        );
    };
    const clearCart = () => {
        setCart([]);
    };

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
            (item) => item.name === product.name
        ).quantity = amount;
        setCart(newCart);
    };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    };
    return (
        <>
            <div style={{
                margin: "20px auto",
                width: "80%",
            }}>
                {cart.length > 0 && (
                    <button onClick={clearCart}>Clear Cart</button>
                )}
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th colSpan={4}> Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product, idx) => (
                            <tr key={idx}>
                                <td>{product.image}</td>
                                <td colSpan={3}>{product.name}</td>
                                <td>{product.price} VND</td>
                                <td style={{ width: "150px" }}>
                                    <input
                                        value={product.quantity}
                                        onChange={(e) =>
                                            setQuantity(
                                                product,
                                                parseInt(e.target.value)
                                            )
                                        }
                                    />
                                </td>
                                <td>{product.price*product.quantity}</td>
                                <td style={{ width: "50px" }}>
                                    <button onClick={() => removeFromCart(product)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div style={{
                    textAlign: "right"
                }}>
                    <p>Total: {getTotalSum()} VND</p>
                    <button style={{
                        background: "#3e3e3f",
                        color: "#fff",
                        boder: "none",
                        padding: "1rem 1.5rem",
                        fontSize: "1rem",
                        textTransform: 'uppercase',
                        cursor: "pointer",
                        letterSpacing: "0.0625rem",

                    }} >THANH TOÁN</button>
                </div>
            </div>
        </>
    );
};

export default Cart;