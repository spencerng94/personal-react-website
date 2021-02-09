import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link } from 'react-router';
import Nav from './nav/Nav.jsx';
 
class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Portfolio/Projects</li>
                    </ul>
                </Router>
            </div>
        )
    }
}

export default App;