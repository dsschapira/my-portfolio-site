import React from 'react';
import {Grid, Row} from "react-bootstrap";
import PostCard from './PostCard.js';
import Data from '../assets/DataFile.js';

const Portfolio = (props) => {
    let personalProjects = ["0","1","2","3","4","5","6","7"];

    return (
        <div className="portfolio-container">
            <div className="portfolio-content-container text-center">
                <Grid>
                    <Row>
                        <h2>Client Projects</h2>
                        <PostCard
                            key={"a"} 
                            title={Data.client["0"].title}
                            description={Data.client["0"].description}
                            imgURL={Data.client["0"].imgURL}
                            otherImgs={Data.client["0"].otherImgs}
                            projURL={Data.client["0"].projURL}
                            gitURL={Data.client["0"].gitURL}
                            blurb={Data.client["0"].blurb}
                        />
                    </Row>
                    <h2>Personal Projects</h2>
                    <Row>
                        {personalProjects.map((proj,index)=>{
                            if(index<3){
                                return(
                                    <PostCard
                                    key = {index} 
                                    title={Data.personal[proj].title}
                                    description={Data.personal[proj].description}
                                    imgURL={Data.personal[proj].imgURL}
                                    otherImgs={Data.personal[proj].otherImgs}
                                    projURL={Data.personal[proj].projURL}
                                    gitURL={Data.personal[proj].gitURL}
                                    blurb={Data.personal[proj].blurb}
                                    />
                                );
                            }
                            return "";
                        })}
                    </Row>
                    <Row>
                        {personalProjects.map((proj,index)=>{
                            if(index>=3&&index<6){
                                return(
                                    <PostCard
                                    key = {index} 
                                    title={Data.personal[proj].title}
                                    description={Data.personal[proj].description}
                                    imgURL={Data.personal[proj].imgURL}
                                    projURL={Data.personal[proj].projURL}
                                    gitURL={Data.personal[proj].gitURL}
                                    blurb={Data.personal[proj].blurb}
                                    />
                                );
                            }
                            return "";
                        })}
                    </Row>
                    <Row>
                        {personalProjects.map((proj,index)=>{
                            if(index>=6){
                                return(
                                    <PostCard
                                    key = {index} 
                                    title={Data.personal[proj].title}
                                    description={Data.personal[proj].description}
                                    imgURL={Data.personal[proj].imgURL}
                                    projURL={Data.personal[proj].projURL}
                                    gitURL={Data.personal[proj].gitURL}
                                    blurb={Data.personal[proj].blurb}
                                    />
                                );
                            }
                            return "";
                        })}
                    </Row>
                </Grid>
            </div>
        </div>
    );
};

export default Portfolio;