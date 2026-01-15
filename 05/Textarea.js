import React from 'react';

class Textarea extends React.Component {

    textAreaRef = React.createRef();

    getSnapshotBeforeUpdate(prevProps) {
        if (prevProps.content === this.props.content) return null;

        const el = this.textAreaRef.current;
        if (!el) return null

        const maxHeight = 100;
        const canGrown = el.offsetHeight < maxHeight;
        const showScroll = el.scrollHeight > el.offsetHeight;

        return {
            resize: canGrown && showScroll
        }


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!snapshot || !snapshot.resize) return;
        this.autoResize();
    }

    autoResize = () => {
        const el = this.textAreaRef.current;
        if (!el) return;

        const maxHeight = 100;

        const next = Math.min(el.scrollHeight, maxHeight);
        el.style.height = `${next}px`;

    }

    render() {
        const { content, textAreaChange } = this.props;
        return (
            <textarea ref={this.textAreaRef} value={content} onChange={textAreaChange}></textarea >
        )
    }
}

export default Textarea;