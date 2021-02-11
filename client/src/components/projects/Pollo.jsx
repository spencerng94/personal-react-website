import React from 'react';

const Pollo = () => {
    return (
        <div className="horizontal-portfolio">
        <div className="project-content3">
            <div className="project-name"> 
                Poll-o
            </div>
            <div className="project-description">
                A social data polling mobile application that allows users to create polls and answer polls from various categories.
            </div>
            <ul className="project-tech-list">
                <li>AWS EC2</li>
                <li>Expo</li>
                <li>MySQL</li>
                <li>Node.js</li>
                <li>React Native</li>
                <li>Webpack</li>
            </ul>
        </div>
            <div className="project-image">
                <a href="https://github.com/spencerng94/poll-o">
                <img className="project-image3" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/Pollo_SS.png"/>
            </a>
            </div>
        </div>
    )
}

export default Pollo;