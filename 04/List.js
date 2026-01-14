import React from 'react';

class List extends React.Component {
    render() {
        const { filesList } = this.props;

        return (
            <ul>
                {filesList.map((f) => (
                    <li key={f.id}>
                        <strong>{f.name}</strong> ({f.size} B)
                        <pre>{f.content}</pre>
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;