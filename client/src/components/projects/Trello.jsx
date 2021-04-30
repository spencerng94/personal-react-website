import React from 'react';

const Trello = () => {
    return (
        <div className="horizontal-portfolio">
        <div className="project-content4">
            <div className="project-name"> 
                Trello Board
            </div>
            <div className="project-description">
                A project management application that allows users to create, edit, and delete lists and their cards.
            </div>
            <ul className="project-tech-list">
                <li>Heroku</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>React-Redux</li>
                <li>AWS S3</li>
                <li>Webpack</li>
            </ul>
            <div>
                <a href="https://trello-board-app.herokuapp.com/" className="heroku-link">https://trello-board-app.herokuapp.com/</a>
            </div>
        </div>
            <div className="project-image">
                <a href="https://github.com/spencerng94/spencer-ng">
                <img className="project-image4" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/Trello_SS.png"/>
                </a>
            </div>
        </div>
    )
}

export default Trello;