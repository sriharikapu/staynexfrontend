import { React, Component } from "react";
import "./adventure-form.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AdventureForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="travelFormContainer col-sm-6">
                <h1 className="text-center">Join the Adventure</h1>
            <Form className="travelForm">
                <Form.Group className="mb-3 row" controlId="formBasicEmail">
                    <Form.Label>I am a</Form.Label>
                    <Form.Check
                        type="radio"
                        label='Property Owner'
                        id='property'
                        className="col-sm-6"
                    />
                    <Form.Check
                        type="radio"
                        label='Traveler'
                        id='property'
                        className="col-sm-6"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile Number (optional)</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Current City</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Age Group</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>select age group</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label=" I understand that the NFT may not retain any future value
                    or provide any utility to its owner and that all of the announced benefits,
                    and any future benefits, are subject to change." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Join Staynex
                </Button>
            </Form>
            </div>
        );
    }
}

export default AdventureForm;