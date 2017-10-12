import React from 'react';
import {Button} from 'react-bootstrap';


const Contact = (props) => {
    return(
        <div id="contact" className="contact-container">
            <div className="contact-content-container text-center">
                <h2>Contact Me</h2>
                <h3>I am available for hire and am currently taking on new projects.</h3>  
                <p>Contact me by email or take a look at my resume.</p>
                <h4>Email: <a href="mailto:dsschapira@gmail.com?subject=[Contacting from Portfolio Site]&body=email%20sent%20from%20dsschapira.com">dsschapira@gmail.com</a></h4>
                <Button 
                bsStyle="info"
                onClick={()=>{window.open("/Dan_Schapira_Resume_10112017.pdf")}}>
                My Resume</Button>
            </div>
        </div>
    );
};

export default Contact;