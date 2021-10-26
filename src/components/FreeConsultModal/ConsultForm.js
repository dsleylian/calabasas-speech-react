import React from "react";
import { Col, Row, Button,  Form, FormGroup, Input, Label } from 'reactstrap';

export default function ConsultForm(){
    return (
        <Form>
            <FormGroup row>
                <Label sm={3} htmlFor="clientname">Name</Label>
                <Col>
                    <Input  type="text" id="clientname" name="clientname"  />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={3} htmlFor="consultphonenumber">Phone Number</Label>
                <Col>
                    <Input  type="text" id="consultphonenumber" name="consultphonenumber" />
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
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="days" /> Monday
                                </Col>
                            </Label>
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="tuesday" /> Tuesday
                                </Col>
                            </Label>
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="days" /> Wednesday
                                </Col>
                            </Label>
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="days"  /> Thursday
                                </Col>
                            </Label>
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="days"  /> Friday
                                </Col>
                            </Label>
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="days" /> Saturday
                                </Col>
                            </Label>
                            
                        </Col>
                        <Col>
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="times"  /> 8am-12noon
                                </Col>
                            </Label>
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="times"  /> 12noon-5pm
                                </Col>
                            </Label>
                            <Label check className="label-formatting">
                                <Col>
                                    <Input className="center" type="checkbox" name="times" /> 5pm-9pm
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
    )
}