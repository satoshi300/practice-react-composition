import React from "react";
import data from "./data.json";

class Table extends React.Component {
    render() {
        // Table bierze dane z data.json
        const products = data;

        // suma całej tabeli (dla Header i Footer)
        const grandTotal = products.reduce(
            (sum, p) => sum + p.price * p.quantity,
            0
        );

        return (
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
                <TableHeader grandTotal={grandTotal} />

                <TableBody>
                    {products.map((p) => (
                        <TableRow
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            quantity={p.quantity}
                        />
                    ))}
                </TableBody>

                <TableFooter grandTotal={grandTotal} />
            </table>
        );
    }
}

class TableHeader extends React.Component {
    render() {
        const { grandTotal } = this.props;

        return (
            <thead>
                <tr>
                    <th colSpan="5">Kwota do zapłaty: {grandTotal}</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Cena</th>
                    <th>Ilość</th>
                    <th>Do zapłaty</th>
                </tr>
            </thead>
        );
    }
}

class TableBody extends React.Component {
    render() {
        // TableBody NIE dostaje products — tylko children (czyli wiersze)
        return <tbody>{this.props.children}</tbody>;
    }
}

class TableRow extends React.Component {
    render() {
        const { id, name, price, quantity } = this.props;
        const total = price * quantity;

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{total}</td>
            </tr>
        );
    }
}

class TableFooter extends React.Component {
    render() {
        const { grandTotal } = this.props;

        return (
            <tfoot>
                <tr>
                    <td colSpan="4" style={{ textAlign: "right" }}>
                        Suma:
                    </td>
                    <td>{grandTotal}</td>
                </tr>
            </tfoot>
        );
    }
}

export default Table;