import React from 'react';
//import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const About = (props) => {
    return(
        <div id="about" className="about-container">
            <div className="about-content-container text-center">
                <h2>About Me</h2>
                <h3>Highlights</h3>
                <h4>International experience</h4>
                <h4>When I don't know the answer to something I am able to admit it and work quickly to find the right solution</h4>
                <h4>Capable of discussing and describing technical concepts in non-technical language</h4>
                <h3>My Story</h3>
                <h4>I am a professional Front End Engineer with a wide set of experiences.</h4>
                <h4>I graduated from Case Western Reserve University with a B.S.E. in Biomedical Engineering, where I spent 2 years researching tissue engineering and biomaterials.</h4>
                <h4>While in college, I learned some Matlab programming on top of my elementary Java from high school.  I elected to teach myself some Python and basic coding principles, which helped me get my first job out of college.</h4>
                <h4>After college, I worked at Epic as an Integration Engineer and Project Manager.</h4>
                <h4>As an Integration Engineer, I helped to develop our interfaces that transmit clinical data between Epic and other systems (like vaccination registries, for example).  I was able to work within a large, pre-existing code base in addition to contributing to entirely new code spaces.</h4>
                <h4>While at Epic, I gained international experience working ~50% of my time in Denmark for over a year as a fly-in/fly-out project manager.</h4>
                <h4>Throughout my time at Epic, I continued to spend time learning new programming and web development skills. I used resources like Codeacademy, FreeCodeCamp, Udemy, EdX, and Teamtreehouse in addition to standard textbooks.</h4>
                <h4>I am leaving Epic in November 2017 and relocating to Pittsburgh, PA to pursue being a Front End or Full Stack Engineer full time.</h4>
            </div>
        </div>
    );
};

export default About;