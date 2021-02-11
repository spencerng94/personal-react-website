import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link } from 'react-router';
import Nav from './nav/Nav.jsx';
import About from '../components/About.jsx';
import Work from '../components/Work.jsx';
import Contact from '../components/Contact.jsx';
 
class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Nav></Nav>
                <header>
                <section>
                    <div className="first-line"> 
                        <h1>Hello, my name is</h1>
                    </div>
                    <div className="full-name"> 
                        Spencer Ng.
                    </div>
                    <div className="headline">
                        I build software for the web.
                    </div>
                    <p>
                        I'm a Full Stack Software Engineer based in San Francisco, CA specializing in building impactful and designing applications for the web.
                    </p>
                    <a href="mailto:spencerng94@gmail.com" className="email-link">
                        Get in Touch
                    </a>
                </section>
                <About></About>
                <section>
                <Work></Work>
                </section>
                {/* <Router> */}
                {/* </Router> */}
                <section>
                    <Contact></Contact>
                </section>
                  </header>
            </div>
        )
    }
}

export default App;