import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";

class NavigationBarHeader extends React.Component {

    render(){
        return(
            <div className="nav-bar">
              <img className="logo-icon" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/S_logo.png"></img>
              <a className="nav-element" href="#about">About</a>
              <a className="nav-element" href="#work">Portfolio</a>
              <a className="nav-element" href="#contact">Contact</a>
              
            </div>
        )  
    }
}

export default NavigationBarHeader;