import React from 'react';
import {Grid, Row, Col, Carousel} from 'react-bootstrap';
import "animate.css/animate.min.css";

const About = (props) => {
    return(
        <div id="about" className="about-container">
            <div className="about-content-container">
                <h2 className="text-center">About Me</h2>
                <Grid>
                    <Row>
                        <Col mdPush={4} md={8}>
                            <h3>My Story</h3>
                            <h4>I am a professional Front End Engineer with a wide set of experiences.</h4>
                            <h4>I graduated from Case Western Reserve University with a B.S.E. in Biomedical Engineering, where I spent 2 years researching tissue engineering and biomaterials.</h4>
                            <h4>While in college, I learned some Matlab programming on top of my elementary Java from high school.  I elected to teach myself some Python and basic coding principles, which helped me get my first job out of college.</h4>
                            <h4>After college, I worked at Epic as an Integration Engineer and Project Manager.</h4>
                            <h4>As an Integration Engineer, I helped to develop our interfaces that transmit clinical data between Epic and other systems (like vaccination registries, for example).  I was able to work within a large, pre-existing code base in addition to contributing to entirely new code spaces.</h4>
                            <h4>While at Epic, I gained international experience working ~50% of my time in Denmark for over a year as a fly-in/fly-out project manager.</h4>
                            <h4>Throughout my time at Epic, I continued to spend time learning new programming and web development skills. I used resources like Codeacademy, FreeCodeCamp, Udemy, EdX, and Teamtreehouse in addition to standard textbooks.</h4>
                            <h4>I am leaving Epic in November 2017 and relocating to Pittsburgh, PA to pursue being a Front End or Full Stack Engineer full time.</h4>
                        </Col>
                        <Col mdPull={8} md={4} className="pull-left">
                            <Row>
                                <Carousel>
                                    <Carousel.Item>
                                        <img className="carousel-img" width={900} height={500} alt="900x500" src={require("../assets/headshot.PNG")}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carousel-img" width={900} height={500} alt="900x500" src={require("../assets/food_pic.PNG")}/>
                                        <Carousel.Caption>
                                            <h3>Food is Life</h3>
                                            <p>One of the best parts about traveling is the food.  Like this pizza in Italy!</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carousel-img" width={900} height={500} alt="900x500" src={require("../assets/live-music.PNG")}/>
                                        <Carousel.Caption>
                                            <h3>Live Music</h3>
                                            <p>Outdoor concerts are one of my favorite summer activites!</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carousel-img" width={900} height={500} alt="900x500" src={require("../assets/nova-pic.PNG")}/>
                                        <Carousel.Caption>
                                            <h3>Cats &amp; Dogs</h3>
                                            <p>I might be more of a dog person, but it isn't the internet without cat pics. Nova, here might change my mind anyway!</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carousel-img" width={900} height={500} alt="900x500" src={require("../assets/self-learning.PNG")}/>
                                        <Carousel.Caption>
                                            <h3>Always Learning</h3>
                                            <p>I'm never short on screens to use when I'm teaching myself a new skill!</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carousel-img" width={900} height={500} alt="900x500" src={require("../assets/music.PNG")}/>
                                        <Carousel.Caption>
                                            <h3>Budding Musician</h3>
                                            <p>I don't only teach myself new tech, I also like to flex my creative muscles.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="carousel-img" width={900} height={500} alt="900x500" src={require("../assets/travel.PNG")}/>
                                        <Carousel.Caption>
                                            <h3>Around the World</h3>
                                            <p>I absolutely love to travel and experience new places!</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Row>
                            <Row>
                                <h3>Highlights</h3>
                                <ul>
                                    <li><h4>International experience</h4></li>
                                    <li><h4>When I don't know the answer to something I am able to admit it and work quickly to find the right solution</h4></li>
                                    <li><h4>Capable of discussing and describing technical concepts in non-technical language</h4></li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    );
};

export default About;