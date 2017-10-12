import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';

const Banner = (props) => {
    
    return(
        <div id="top" className="banner-container">
            <Jumbotron>
                <div className="jumbotron-content text-center">
                    <h1>Dan Schapira</h1>
                    <p>Solving problems with code</p>
                    <SocialIcon color="black" url="https://github.com/dsschapira"/>
                    <SocialIcon color="#12249C" url="https://www.linkedin.com/in/daniel-schapira-5754015a/"/>
                    <SocialIcon url="https://codepen.io/dsschapira/"/>
                    <SocialIcon url="https://www.freecodecamp.org/dsschapira"/>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Banner;