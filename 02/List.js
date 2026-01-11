import React from 'react';

import ListItem from './ListItem';

function List({items}) {
    return (
        <ul>
            {items.map((name,index) => (
                <ListItem  key={index} name={name} />
            ))}
        </ul>
    )
}

export default List;
