import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';
import Product from './Products';

class App extends React.Component {
    state = {
        cart: [],
    }

    addToCart = (item) => {
        const { cart } = this.state;
        this.setState({
            cart: [...cart, item]
        })
    }

    removeFromCart = (item) => {
        const currProduct = this.state.cart.filter(
            item => item !== item
        );
        this.setState({
            cart: currProduct
        })
    }

    render() {
        console.log(data)
        const products = data;
        // const { data } = this.props
        return (
            <section>
                <Category addToCart={this.addToCart} products={products} />
                <Cart removeFromCart={this.removeFromCart} products={this.state.cart} />

            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
