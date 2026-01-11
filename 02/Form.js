import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.name);
        this.setState({
            name: '',
        })

    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    render() {
        return (

            < section >
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.name} type="text" />
                    <input type="submit" />
                </form>
            </section >
        )
    }
}

export default Form;