import React, {Component, createContext} from "react";


export const CartContext = createContext();
// const getItemFormLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
// const [cart, setCart] = useState(getItemFormLocalStorage)

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        };

        this.getToCart = this.getToCart.bind(this);
    }

    getToCart(product) {
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        });
    }

    render() {
        return  <CartContext.Provider value={{ cartItems: this.state.cartItems }}>
                { this.props.children }
            </CartContext.Provider>
    }
}