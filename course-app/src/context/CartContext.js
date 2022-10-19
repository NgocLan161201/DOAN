import { Component, createContext } from 'react';

export const CartContext = createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItem: []
        };

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product) {
        console.log("adding to cart", product);
        this.setState({
            cartItem: this.state.cartItem.concat(product)
        });
    }


    render() {
        return (
            <>
                <CartContext.Provider value={{ cartItem: this.state.cartItem, addToCart: this.addToCart }}>
                    {this.props.children}
                </CartContext.Provider>
            </>
        );

    }
}