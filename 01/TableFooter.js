import React from "react";

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

export default TableFooter;