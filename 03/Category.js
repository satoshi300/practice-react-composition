import React from 'react';
import Products from './Products';

function Category(props) {
    //  to jest przekazane z app za pomoca addToCart={this.addToCart} products={products}
    const { products, addToCart } = props;
    console.log(props)
    return (
        <ul>
            <h2>Category</h2>
            <Products data={products} addToCart={addToCart} />

        </ul>
    )
}

export default Category;