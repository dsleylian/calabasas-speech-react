import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Col, Collapse, NavItem, Jumbotron, Row, Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        }
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid id="jumbotron">
                    <div className="container jumbocotainer" >
                        <div className="row align-items-center ">
                            <div className="col col-lg-3">
                                <a href="/"><img id="logo" src={logo} alt="Calabasas Speech logo" /></a>
                            </div>
                            <div className="col d-none d-lg-block text-center">
                                <h2>Speech and Language Services</h2>
                            </div>
                            <div className="col col-lg-3 text-right">
                                <Button className="btn btn-secondary btn-lg freeconsult" onClick={this.toggleModal} id="freeconsultbtn">Free Consultation
                                </Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="lg">
                    <ModalHeader toggle={this.toggleModal}>Schedule a Free Phone Consultation</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label sm={3} htmlFor="clientname">Name</Label>
                                <Col>
                                    <Input  type="text" id="clientname" name="clientname" innerRef={input => this.username = input} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3} htmlFor="consultphonenumber">Phone Number</Label>
                                <Col>
                                    <Input  type="text" id="consultphonenumber" name="consultphonenumber" innerRef={input => this.consultphonenumber = input} />
                                </Col>
                            </FormGroup>
                            <p>Let us know when is a good time for you to talk:</p>
                            <FormGroup row >
                                <Col>Days</Col>
                                <Col>Times</Col>
                            </FormGroup>
                            <FormGroup row check>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="days" innerRef={input => this.monday = input} /> Monday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="tuesday" innerRef={input => this.tuesday = input} /> Tuesday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="days" innerRef={input => this.wednesday = input} /> Wednesday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="days" innerRef={input => this.thursday = input} /> Thursday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="days" innerRef={input => this.friday = input} /> Friday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="days" innerRef={input => this.saturday = input} /> Saturday
                                                </Col>
                                            </Label>
                                            
                                        </Col>
                                        <Col>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="times" innerRef={input => this.monday = input} /> 8am-12noon
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="times" innerRef={input => this.tuesday = input} /> 12noon-4pm
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Input  type="checkbox" name="times" innerRef={input => this.wednesday = input} /> 5pm-9pm
                                                </Col>
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </FormGroup>
                            <FormGroup row className="align-items-center">
                                <Col>
                                    <p className="ModalContactP">We will contact you at our earliest availability!</p>
                                </Col>
                                <Col className="text-center align-self-center">
                                    <Button className="ModalButton" id="consultSubmitBbutton" type="submit" value="submit">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

                <Navbar dark sticky="top" expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar className="mx-auto">
                                <NavItem> 
                                    <NavLink exact activeClassName="active" className="navLink" to="/"><i className="fa fa-home" /> Home</NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink activeClassName="active" className="navLink" to="/aboutus"><i className="fa fa-info" /> About Us</NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink activeClassName="active" className="navLink" to="/freeresources"><i className="fa fa-file-o" /> Free Resources</NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink activeClassName="active" className="navLink" to="/contactus"><i className="fa fa-address-card-o" /> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;