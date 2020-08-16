import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Listing() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Looking for another roommate!</Card.Title>
                <Row>
                    <Col>
                        <Card.Img
                            variant="top"
                            src="https://cdngeneral.rentcafe.com/dmslivecafe/3/984399/Hearth-Model-Unit-IMG-0370_webopt_2MB.jpg?crop=(0,8,300,199.25000000000028)&cropxunits=300&cropyunits=200&quality=85&scale=both&"
                        />
                    </Col>
                    <Col>
                        <Card.Text>
                            I am looking for a second roommate for my apartment. Dryer and washer in-unit!
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Listing;
