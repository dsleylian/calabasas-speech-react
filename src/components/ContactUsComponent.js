import React, { Component } from 'react';
import { Col,  Row, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = val => val && val.length;
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            clientName: '',
            consultPhoneNumber: '',
            formComments: '',
            email: '',
            touched: {
                clientName: false,
                consultPhoneNumber: false,
                formComments: false,
                email: false,
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }


    render() {

        return (
            <div className="container">
                <div className="content-row ">
                    <h3 className="text-center m-3">Contact Us </h3>
                    <div class="row justify-content-center mt-5">
                <div class="col col-md-2 text-center text-md-right">
                    <h4>Call Us</h4>
                </div>
                    <div class="col-12 col-md-4 col-lg-3 text-center text-md-left">
                        <a role="button" href="tel:+18181231234" class="btn btn-link"><span class="fa fa-phone"></span> +1-818-123-1234</a>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-4 col-md-5 text-center text-md-right ">
                        <h4>Email Us</h4>
                    </div>
                    <div class="col-xs-12 col-sm col-lg-5 text-center text-md-left">
                        <a role="button" href="mailto:goldydogsend@CalabasasSpeech.com" class="btn btn-link"><span class="fa fa-envelope"></span> goldydogsent@CalSpeech.com</a>
                    </div>
                </div>
                    <div className="col col-md-9 mt-3 mx-auto">
                        <LocalForm className="contactUsForm" onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label sm={3} htmlFor="clientName">Name</Label>
                                <Col>
                                    <Control.text model=".clientName" id="clientName" name="clientName" className="form-control" validators={{ required }} />
                                    <Errors 
                                        className="text-danger" model=".clientName" show="touched" component="div" messages={{ required: "Required" }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label sm={3} htmlFor="consultPhoneNumber">Phone Number</Label>
                                <Col>
                                    <Control.text model=".consultPhoneNumber" type="text" id="consultPhoneNumber" name="consultPhoneNumber" className="form-control" validators={{ required, isNumber }} />
                                    <Errors 
                                        className="text-danger" model=".consultPhoneNumber" show="touched" component="div" messages={{ required: "Required", isNumber: "Must be a number"}}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label sm={3} htmlFor="email">Email</Label>
                                <Col>
                                    <Control.text model=".email" type="text" id="email" name="email" className="form-control" validators={{ required, validEmail }} />
                                    <Errors 
                                        className="text-danger" model=".email" show="touched" component="div" messages={{ required: "Required", validEmail: "Invalid email address"}}
                                        />
                                </Col>
                            </Row>
                            <p>Let us know when is a good time for you to talk:</p>
                            <Row className="form-group ">
                                <Col className="d-none d-md-block">Days</Col>
                                <Col className="d-none d-md-block">Times</Col>
                                <Col className="d-block d-md-none text-center">Days & Times</Col>
                            </Row>
                            <div className="form-check">
                                <Col>
                                    <Row>
                                        <Col>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".monday" name="monday" className="form-check-input" /> Monday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".tuesday" name="tuesday" className="form-check-input" /> Tuesday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".wednesday" name="wednesday" className="form-check-input" /> Wednesday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".thursday" name="thursday" className="form-check-input" /> Thursday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".friday" name="friday" className="form-check-input" /> Friday
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".saturday" name="saturday" className="form-check-input" /> Saturday
                                                </Col>
                                            </Label>
                                            
                                        </Col>
                                        <Col>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".time812" name="time812" className="form-check-input" /> 8am-12noon
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".time125" name="time125" className="form-check-input" /> 12noon-5pm
                                                </Col>
                                            </Label>
                                            <Label check>
                                                <Col>
                                                    <Control.checkbox model=".time59" name="time59" className="form-check-input" /> 5pm-9pm
                                                </Col>
                                            </Label>
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                            <Row className="form-group mt-4">
                                <Label sm={3} htmlFor="formComments">Comments</Label>
                                <Col>
                                    <Control.textarea model=".formComments" id="formComments" name="formComments" rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group align-items-center">
                                <Col>
                                    <p className="ModalContactP">We will contact you at our earliest availability!</p>
                                </Col>
                                <Col className="text-center align-self-center">
                                    <Button className="ModalButton" id="consultSubmitBbutton" type="submit" value="submit">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}
