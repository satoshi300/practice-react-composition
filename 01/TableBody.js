import React from "react";

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

export default TableBody;