import React from 'react';

const Intro = () => {
    return(
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
            I'm a Full Stack Software Engineer based in San Francisco, CA specializing in building eye-popping software and designing applications for the web.
        </p>
        <a href="mailto:spencerng94@gmail.com" className="email-link">
            Get in Touch
        </a>
    )
}

export default Intro;