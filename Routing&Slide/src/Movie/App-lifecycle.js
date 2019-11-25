import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        count: 0
    };

    add = () => {
        this.setState(current => ({ count: current.count + 1}));
    };
    subtract = () => {
        this.setState(current => ({ count: current.count + 1}));
    };

    componentDidMount() {
        console.log("rendered");
    }

    componentDidUpdate() {
        console.log("Updated");
    }

    componentWillUnmount() {
        console.log("bye");
    }

    render() {
        return (
            <div className="App">
                <h1>Class Component</h1>
                <p>State: {this.state.count}</p>
                <button onClick={this.add}>Add</button>
                <button onClick={this.subtract}>Subtract</button>
            </div>
        )
    }
}

export default App;
