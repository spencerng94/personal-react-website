import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link } from 'react-router';
import NavigationBarHeader from './nav/Nav.jsx';
import About from '../components/About.jsx';
import Work from '../components/Work.jsx';
import Contact from '../components/Contact.jsx';
import Intro from '../components/Intro.jsx';
 
class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header>
                <NavigationBarHeader></NavigationBarHeader>
                <section id="intro">
                    <Intro></Intro>
                </section>
                <About></About>
                <section id="work">
                    <Work></Work>
                </section>
                <section id="contact">
                    <Contact></Contact>
                </section>
                  </header>
            </div>
        )
    }
}

export default App;