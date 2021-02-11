import React from 'react';

const About = () => {
    return (
        <section id="about">
        <div className="horizontal-about">
            <h2 className="numbered-heading">
                About Me
            </h2>
            <div className="flex-about">
            <div className="horizontal-about">
                <p>
                    Hello! I'm Spencer, a software engineer based in San Francisco, CA.
                </p>
                <p>
                    I enjoy creating and designing web applications both by myself and with other engineers. My goal is to build products that are as functional as they are aesthetically pleasing - work that I am proud to claim as my own. I am a lifelong learner that is passionate about self-improvement, innovation, and connections. When I am not coding, I love to lift weights, play video games, and walk my Shiba Inu.
                </p>
                <p>
                    After studying Biological Sciences at UCLA and Global Medicine at the Keck School of Medicine, I grew to love scientific methodology, problem-solving and learning about how systems interact. I became obsessed with coding and dived right into the world of Software Engineering with Hack Reactor. This is a preview of some of the projects I have developed.
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
                <ul>
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Node.js</li>
                    <li>React</li>
                </ul>
            </div>
            <img className="portrait" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/Spencer_Portrait.JPG"/>
            </div>
        </div>
        </section>
    )
}

export default About;