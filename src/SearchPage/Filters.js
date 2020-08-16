import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Filters() {
    function handleSubmit() {
        console.log('clicked on submit filters');
    }

    return (
        <Container>
            <h3>Filters</h3>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Location </Form.Label>
                    <Form.Control as="select">
                        <option>Ballard</option>
                        <option>Capitol Hill</option>
                        <option>Greenwood</option>
                        <option>Northgate</option>
                        <option>University District</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Price </Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Lease Length </Form.Label>
                    <Form.Control as="select">
                        <option>6 months</option>
                        <option>12 months</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Square Footage </Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Majors </Form.Label>
                    <Form.Control as="select">
                        <option>Biology</option>
                        <option>Computer Science</option>
                        <option>English</option>
                        <option>Pre-med</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={() => handleSubmit() }>Search</Button>{' '}
        </Container>
    );
}

export default Filters;