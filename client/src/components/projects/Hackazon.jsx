import React from 'react';

const Hackazon = () => {
    return (
        <div className="horizontal-portfolio">
        <div className="project-content1">
            <div className="project-name"> 
                Hackazon
            </div>
            <div className="project-description"> 
                An e-commerce web application that features a product page with pictures, reviews, and Q&A. 
            </div>
            <ul className="project-tech-list">
                <li>AWS EC2</li>
                <li>AWS S3</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>CSS3</li>
                <li>Docker</li>
                <li>Jest</li>
                <li>Enzyme</li>
            </ul>
        </div>
            <div className="project-image">
                <a href="https://github.com/Team-SEEEL/main-product">
                    <img className="project-image1" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/Hackazon_SS.png"/>
                </a>
            </div>
        </div>
    )
}

export default Hackazon;