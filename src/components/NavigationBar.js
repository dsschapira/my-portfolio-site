import React from 'react';
import {Navbar,
        Nav,
        NavItem} from 'react-bootstrap';


function makeLinkWork(event){
    let urlTarget = event.currentTarget.getAttribute("href");
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var yTarget;
    if(urlTarget==="#about"){
        yTarget=350;
    }
    else if(urlTarget==="#portfolio"){
        yTarget= x<=981?1900:1200;
    }
    else if(urlTarget==="#contact"){
        yTarget=1500000; //really high number - just get to the bottom!
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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;