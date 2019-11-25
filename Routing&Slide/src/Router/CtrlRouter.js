import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from '../App';
import Introduction from '../Lecture/Introduction';
import WorldWideWeb from '../Lecture/WorldWideWeb';

class CtrlRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/introduction" component={Introduction}/>
                <Route path="/worldWideWeb" component={WorldWideWeb}/>
            </div>
        );
    }
}

export default CtrlRouter;