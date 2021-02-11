import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h4 className="numbered-heading"> Contact</h4>
            <div className="lets-connect"> 
                Let's Connect
            </div>
            <p> 
                <div className="lets-connect-p">
                    I am currently open to new opportunities. 
                    Please feel free to say hi or drop me a question and 
                    I will get back to you as soon as I can!
                </div>
            </p>
            <div className="email-me-button">
                <a href="mailto:spencerng94@gmail.com" className="email-link">
                        Email Me :)
                </a>
            </div>
            <div className="social-media">
                <a href="https://github.com/spencerng94">
                    <img className="github" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/Github_icon.png"/>
                </a>
                <a href="https://www.linkedin.com/in/ngspencer94/">
                    <img className="linkedin" src="https://sn-personal-website-bucket.s3-us-west-1.amazonaws.com/images/LinkedIn_Icon.png"/>
                </a>
            </div>
        </section>
    )
}

export default Contact;