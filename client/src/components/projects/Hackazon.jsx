import React from 'react';

const Hackazon = () => {
    return (
        <div className="project-content">
            <div className="project-name"> 
                Hackazon
            </div>
            <div className="project-description"> 
                A SPA (single-page application) e-commerce site mockup that features a product with Faker.js generated data. 
            </div>
            <ul className="project-tech-list">
                <li>Faker.js</li>
                <li>AWS API</li>
                <li>React.js</li>
            </ul>
            <div className="project-image">
                {/* <a href=""></a> */}
            </div>
        </div>
    )
}

export default Hackazon;