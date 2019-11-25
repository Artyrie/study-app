import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Seatbook, Home, Selector } from '../pages';
import Menu from '../manage/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <Route exact path="/" component={Home} />
                <Route path="/Seatbook" component={Seatbook} />
                <Route exact path="/Selector" component={Selector} />
            </div>
        );
    }
}

export default App;