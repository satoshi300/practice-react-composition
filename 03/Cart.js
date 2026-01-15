import React from 'react';
import Products from './Products';

function Cart(props) {
    // te products jest przekazane z app products={this.state.cart}
    const { products, removeFromCart } = props;

    return (
        <>
            <h2>Cart</h2>
            <Products data={products} isCart={true} removeFromCart={removeFromCart} />
        </>
    )
}

export default Cart;