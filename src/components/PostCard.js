import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Modal, Button} from 'react-bootstrap'

class PostCard extends Component{

    constructor(props){
        super(props);
        this.state={
            showModal:false
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.viewProject = this.viewProject.bind(this);
        this.viewGit = this.viewGit.bind(this);
    }
    
    close() {
        this.setState({ showModal: false });
    }
      
    open() {
        this.setState({ showModal: true });
    }

    viewProject(){
        window.open(this.props.projURL);
    }

    viewGit(){
        window.open(this.props.gitURL);
    }

    render(){
        const cardModal = (
            <div className="text-center">
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><strong>{this.props.title}</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.title==="SaberBallBlog"?<h4>Updated Version - Launches Oct 27th, 2017</h4>:""}
                        <img alt="Main" src={require('../assets/'+this.props.imgURL+'.PNG')} />
                        {this.props.title==="SaberBallBlog"?<h4>Previous Version</h4>:""}
                        {this.props.otherImgs
                        ?
                        this.props.otherImgs.map((image,index)=>{
                           return(<img key={image} alt="Additonal" src={require('../assets/'+image+'.PNG')}/>);
                        })
                        :""}
                        <hr />
                        <p dangerouslySetInnerHTML={{__html:this.props.blurb}}></p>
                    </Modal.Body>
                    <Modal.Footer>
                        {this.props.projURL? <Button onClick={this.viewProject}>View Project</Button>: ""}
                        {this.props.gitURL? <Button onClick={this.viewGit}>View GitHub</Button>: ""}
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
          </div>
        );

        if(this.props.title ==="SaberBallBlog"){
            return(
                <Col>
                    <div onClick={this.open} className="post-card card mr-2">
                        <h3 className="card-title mt-2"><strong>{this.props.title}</strong></h3>
                        <div className="card-block pb-2">
                            <img className="card-img-top mt-2" src={require('../assets/'+this.props.imgURL+'.PNG')} alt="Card topper"/>
                            <hr className="post-card-hr"/>
                            <p className="card-text">{this.props.description}</p>
                        </div>
                        {cardModal}
                    </div>
                </Col>
            );
        }
        else{
            return(
                <Col md={6} lg={4}>
                    <div onClick={this.open} className="post-card card mr-2">
                        <h3 className="card-title mt-2"><strong>{this.props.title}</strong></h3>
                        <div className="card-block pb-2">
                            <img className="card-img-top mt-2" src={require('../assets/'+this.props.imgURL+'.PNG')} alt="Card topper"/>
                            <hr className="post-card-hr"/>
                            <p className="card-text">{this.props.description}</p>
                        </div>
                        {cardModal}
                    </div>
                </Col>
            );
        }
    }
};

PostCard.propTypes = {
    imgURL: PropTypes.string,
    otherImgs: PropTypes.array,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired,
    projURL: PropTypes.string,
    gitURL: PropTypes.string
};

export default PostCard;