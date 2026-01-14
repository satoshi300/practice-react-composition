import React from 'react';

class Textarea extends React.Component {
    render() {
        const { content } = this.props;
        console.log(content);
        return <textarea></textarea>
    }
}

export default Textarea;