import React from 'react';

const Potion = () => {
    return (
        <div className="horizontal-portfolio">
            <div className="project-image">
                <a href="https://github.com/spencerng94/magic-potion">
                    <img className="project-image5" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/Success.png"/>
                </a>
            </div>
        <div className="project-content2">
            <div className="project-name"> 
                Magic Potion Form
            </div>
            <div className="project-description">
                A product order form application that includes form validation and notifications on successful form submission.
            </div>
            <ul className="project-tech-list">
                <li>Heroku</li>
                <li>PHP 7 (Laravel)</li>
                <li>MySQL</li>
                <li>React</li>
                <li>PHPUnit</li>
                <li>Webpack</li>
            </ul>
            <div>
                <a href="https://magic-potion-formherokuapp.com/" className="heroku-link">https://magic-potion-form.herokuapp.com/</a>
            </div>
        </div>
        </div>
    )
}



export default Potion;