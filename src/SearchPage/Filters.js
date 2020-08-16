import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


async function Filters({setAllListings}) {
    /*const handleSubmit = async () => {
        const url = '/housing';
        return await fetch(url)
        .then(response => response.json(),
            error => console.log('An error occurred: ', error))
        .then(json => json);
    }*/

    /*var temp = await handleSubmit();
    console.log(temp);
    setAllListings(temp)*/

    //useEffect(await handleSubmit, []);

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
            <Button variant="primary">Search</Button>{' '}
        </Container>
    );
}

export default Filters;
