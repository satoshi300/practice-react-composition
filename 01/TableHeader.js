import React from "react";

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

export default TableHeader;