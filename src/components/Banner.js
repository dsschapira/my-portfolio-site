import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';

const Banner = (props) => {
    
    return(
        <div id="top" className="banner-container">
            <Jumbotron>
                <div className="jumbotron-content text-center">
                    <h1>Dan Schapira</h1>
                    <p>Solving problems with code</p>
                    <SocialIcon color="#CECECE" url="https://github.com/dsschapira"/>
                    <SocialIcon color="#12249C" url="https://www.linkedin.com/in/daniel-schapira-5754015a/"/>
                    <SocialIcon color="#CECECE" url="https://codepen.io/dsschapira/"/>
                    <SocialIcon url="https://www.freecodecamp.org/dsschapira"/>
                    <div/>
                    <Button 
                        bsStyle="info"
                        onClick={()=>{window.open("/Dan_Schapira_Resume_10112017.pdf")}}>
                        My Resume</Button>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Banner;