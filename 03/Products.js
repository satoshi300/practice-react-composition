import React from 'react';

class Products extends React.Component {
    render() {
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