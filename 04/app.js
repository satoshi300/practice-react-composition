import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuid } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    readFile = (e) => {
        const files = Array.from(e.target.files); // FileList -> Array

        files.forEach((file) => {
            if (!file.type.includes('text')) return;

            const reader = new FileReader();

            reader.onload = (readerEvent) => {
                const content = readerEvent.target.result;

                const fileData = {
                    id: uuid(),
                    name: file.name,
                    size: file.size,
                    content,
                };

                this.setState((prev) => ({
                    filesList: [...prev.filesList, fileData],
                }));
            };

            reader.readAsText(file, 'UTF-8');
        });

        e.target.value = null;
    };

    render() {
        return (
            <section>
                <File readFile={this.readFile} />
                <List filesList={this.state.filesList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
