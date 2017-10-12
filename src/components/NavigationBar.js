import React from 'react';
import {Navbar,
        Nav,
        NavItem} from 'react-bootstrap';


function makeLinkWork(event){
    let urlTarget = event.currentTarget.getAttribute("href");
    var yTarget;
    if(urlTarget==="#about"){
        yTarget=300;
    }
    else if(urlTarget==="#portfolio"){
        yTarget=1000;
    }
    else if(urlTarget==="#contact"){
        yTarget=1500000; //really high number - just get to the bottom!
    }
    else if(urlTarget==="#resume"){
        window.open("/Dan_Schapira_Resume_10112017.pdf");
    }
    
    window.scrollTo(0,yTarget);
}

const NavigationBar = (props) => {
    return(
        <Navbar fixedTop collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#top">Dan Schapira</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#about" onClick={(e)=>{makeLinkWork(e)}}>About</NavItem>
                    <NavItem eventKey={2} href="#portfolio" onClick={(e)=>{makeLinkWork(e)}}>Portfolio</NavItem>
                    <NavItem eventKey={3} href="#contact" onClick={(e)=>{makeLinkWork(e)}}>Contact</NavItem>
                    <NavItem eventKey={4} id="resume" href="#resume" onClick={(e)=>{makeLinkWork(e)}}>Resume</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;