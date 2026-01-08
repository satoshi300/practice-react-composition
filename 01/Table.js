import React from 'react';
import data from "./data.json";

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
class TableBody extends React.Component {
    render() {
        const { fromParent } = this.props;
        const body = fromParent.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                </tr>
            )
        })
        return <tbody>{body}</tbody>
    }
}
class TableHeader extends React.Component {
    render() {
        // const { data } = this.props;
        // return (
        //     <thead>
        //         <tr>
        //             {data.map(col => {
        //                 <th>{col.label}</th>
        //             })}
        //         </tr>
        //     </thead>
        // )
        return (
            <tr>
                <th>Id</th>
                <th>Nazwa</th>
                <th>Cena</th>
                <th>Ilosc</th>
            </tr>
        )
    }
}

class TableFooter extends React.Component {
    render() {
        const { grandTotal } = this.props;

        return (
            <tfoot>
                <tr>
                    <td colSpan="2" style={{
                        textAlign: "right",
                        fontWeight: 'bold'
                    }}>
                        Suma:
                    </td>
                    <td style={{ fontWeight: 'bold' }}>{grandTotal}</td>
                </tr>
            </tfoot>
        );
    }
}

export default Table;