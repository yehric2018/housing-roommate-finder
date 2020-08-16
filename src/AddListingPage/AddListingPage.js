import React, {useState, useEffect} from 'react';
import NavBar from '../Common/NavBar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FormGroup } from 'react-bootstrap';

function AddListingPage() {
    const [roommateCount, setRoommateCount] = useState(5);

    function handleSubmit() {
        console.log('submitted listing!');
    }

    function displayRoommateInfo() {
        const roommatesArray = [];
        for (let i = 0; i < roommateCount; i++) {
            roommatesArray.push(<RoommateInfo roommateNum={i} />);
        }
        return roommatesArray;
    }

    return (
        <div>
            <NavBar />
            <Container className='mt-5'>
                <h1>Post a Listing</h1>
                <br />
                <Form>
                    <Form.Group as={Row} controlId="Title">
                        <Form.Label column sm={2}>
                            Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Description">
                        <Form.Label column sm={2}>
                            Description
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"/>
                        </Col>
                    </Form.Group>

                    <br />

                    <h4>Location</h4>

                    <br />

                    <Form.Group as={Row} controlId="formGridAddress1">
                        <Form.Label column sm={2}>Address</Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="1234 Main St" />
                        </Col>
                    </Form.Group>

                    <Form.Row>
                        <Form.Label column sm={2}>City</Form.Label>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column sm={2}>State</Form.Label>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label column sm={2}>Zip</Form.Label>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <br />

                    <h4>Housing Info</h4>

                    <br />

                    <Form.Group as={Row}>
                        <Col>
                            <Form.Label>
                                Rent
                             </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="number" />
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.Label>
                                Number of Current Roommates
                            </Form.Label>
                            <Form.Control type="number" onChange={(e) => setRoommateCount(e)} />
                        </Col>
                        <Col>
                            <Form.Label>
                                Length of Lease (Months)
                            </Form.Label>
                            <Form.Control type="number" />
                        </Col>
                        <Col>
                            <Form.Label>
                                Square Footage
                            </Form.Label>
                            <Form.Control type="number" />
                        </Col>
                    </Form.Group>

                    <br />

                    <h4>Upload images of listing</h4>

                    <br />

                    <Form.Group as={Row}>
                        <Form.File.Label column sm={2}>
                            Choose images to upload
                        </Form.File.Label>
                        <Col sm={10}>
                            <Form.File>
                                <Form.File.Input multiple />
                            </Form.File>
                        </Col>
                    </Form.Group>

                    <br />

                    <h4>Roommate(s) Info</h4>

                    <br />

                    {displayRoommateInfo()}

                    <Button variant="primary" type="submit" onClick={() => handleSubmit()}>Submit</Button>{' '}

                </Form>
            </Container>
        </div>
    );
}

function RoommateInfo({roommateNum}) {
    return (
        <div>
            <h6>Roommate {roommateNum + 1}</h6>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Name
                </Form.Label>
                <Col>
                    <Form.Control type="text" />
                </Col>
            </Form.Group>  
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Major </Form.Label>
                <Col>
                    <Form.Control as="select">
                        <option>Biology</option>
                        <option>Computer Science</option>
                        <option>English</option>
                        <option>Pre-med</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Sleep Schedule
                </Form.Label>
                <Col>
                    <Form.Control type="text" />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Habits
                </Form.Label>
                <Col>
                    <Form.Control type="text" />
                </Col>
            </Form.Group>  
            <Form.Group as={Row}>
                <Form.File.Label column sm={2}>
                    Add a picture
                </Form.File.Label>
                <Col sm={10}>
                    <Form.File>
                        <Form.File.Input />
                    </Form.File>
                </Col>
            </Form.Group>
    );
}

export default AddListingPage;