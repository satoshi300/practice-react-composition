import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';
import ListItem from './ListItem';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUser = (name) => {
        const { usersList } = this.state;
        this.setState({
            usersList: [...usersList, name]
        })
    }
    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form submit={this.addUser} />
                <List items={usersList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
