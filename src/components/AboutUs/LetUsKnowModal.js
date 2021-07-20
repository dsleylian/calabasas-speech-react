import React, { Component } from 'react';
import {Button, Col, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

export default class LetUsKnowModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        let groupTherapy;

        if(this.props.therapist.button === "Flip") {
            groupTherapy = <FormGroup row >
                                <Label sm={5} htmlFor="grouptherapt">Are you interested in group thearpy?</Label>
                                <Col className="">
                                    <Label >
                                        <Col >
                                            <Input  type="radio" name="grouptherapy"  id="yes" innerRef={input => this.monday = input} /> Yes
                                        </Col>
                                    </Label>
                                    <Label >
                                        <Col>
                                            <Input  type="radio" name="grouptherapy"  id="no" innerRef={input => this.monday = input} /> No
                                        </Col>
                                    </Label>
                                </Col>
                            </FormGroup>
        }

        return (
            <div>
                <p>Interested in working with {this.props.therapist.button}? <Button className="btn letUsKnowButton" onClick={this.toggleModal} >Let Us Know </Button> </p> 
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="lg">
                    <ModalHeader toggle={this.toggleModal}>Interested in working with {this.props.therapist.button}?</ModalHeader>
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
                            <FormGroup row>
                                <Label sm={3} htmlFor="additionalinfo">Additional Info</Label>
                                <Col>
                                    <Input  type="textarea" id="additionalinfo" name="additionalinfo" innerRef={input => this.additionalinfo = input} />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label sm={3} htmlFor="preferredsetting">Preferred Setting</Label>
                                <Col className="my-auto">
                                    <Label >
                                        <Col c>
                                            <Input  type="checkbox" name="preferredsetting"  id="inhome" innerRef={input => this.monday = input} /> In Home
                                        </Col>
                                    </Label>
                                    <Label >
                                        <Col>
                                            <Input  type="checkbox" name="preferredsetting"  id="inoffice" innerRef={input => this.monday = input} /> Office
                                        </Col>
                                    </Label>
                                    <Label >
                                        <Col>
                                            <Input  type="checkbox" name="preferredsetting"  id="onsite" innerRef={input => this.monday = input} /> On Site
                                        </Col>
                                    </Label>
                                    <Label >
                                        <Col>
                                            <Input  type="checkbox" name="preferredsetting"  id="tele-therapy" innerRef={input => this.monday = input} /> Tele-Therapy
                                        </Col>
                                    </Label>
                                </Col>
                            </FormGroup>
                            {groupTherapy}

                            <FormGroup row className="align-items-center">
                                <Col className="text-center align-self-center">
                                    <Button className="ModalButton" id="consultSubmitBbutton" type="submit" value="submit">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
