import React from 'react';
import data from "./data.json";
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const products = data;

        const grandTotal = products.reduce(
            (sum, p) => sum + p.price * p.quantity,
            0
        );
        // console.log(data);
        return <table border={2} cellPadding="8" style={{ borderCollapse: "collapse" }}>
            <th colSpan={5}>Cena za wszystkie produkty: {grandTotal}</th>
            <TableHeader tableHeader={this.props.data} />
            <TableBody fromParent={this.props.data} />
            <TableFooter grandTotal={grandTotal} />
        </table>
    }
}

export default Table;