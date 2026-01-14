import React from 'react';

class File extends React.Component {

    render() {
        const { readFile } = this.props;
        return <input onChange={readFile} type="file" multiple accept='txt,txt/plain' />
    }
}

export default File;