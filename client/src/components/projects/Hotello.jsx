import React from 'react';

const Hotello = () => {
    return (
        <div className="horizontal-portfolio">
            <div className="project-image">
                <a href="https://github.com/SSN8KSS/calendar">
                    <img className="project-image2" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/Hotello_SS.png"/>
                </a>
            </div>
        <div className="project-content2">
            <div className="project-name"> 
                Hotell-o
            </div>
            <div className="project-description">
                System design optimization of a calendar reservation application from a legacy codebase. 
            </div>
            <ul className="project-tech-list">
                <li>Nginx</li>
                <li>AWS EC2</li>
                <li>PostgreSQL</li>
                <li>Loader.io</li>
                <li>New Relic</li>
                <li>Node.js</li>
            </ul>
        </div>
        </div>
    )
}



export default Hotello;