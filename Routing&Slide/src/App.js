import React from 'react';
import { Link } from 'react-router-dom';
//import Introduction from './Lecture/Introduction';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h2>Lecture</h2>
                {/*<Introduction></Introduction>*/}
                <ul>
                    <li><Link to="/introduction">Introduction</Link></li>
                    <li><Link to="/worldWideWeb">WorldWideWeb</Link></li>
                </ul>
            </div>
        );
    }
}

export default App;