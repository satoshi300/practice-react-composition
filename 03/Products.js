import React from 'react';

class Products extends React.Component {
    render() {
        // isCart i products z Cart data={products} isCart={true}  
        // data i addToCart z Category  <Products data={products} addToCart={addToCart} />
        const { data, isCart, addToCart, removeFromCart } = this.props;
        const items = data.map(item => {
            if (!isCart) {
                return <li>{item.name}  <button onClick={() => addToCart(item)}>Dodaj do koszyka</button></li>
            }
            return <li>{item.name}  <button onClick={() => removeFromCart(item)}>Usun z koszyka</button></li>
        })
        return <ul>{items}</ul>
    }
}

export default Products;