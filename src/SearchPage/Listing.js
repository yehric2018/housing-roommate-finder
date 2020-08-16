import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Listing({ title, description, price, location, length, squareFootage, roommateInfo}) {
    function listRoomates() {
        if (roommateInfo === undefined) {
            return null;
        } else {
            roommateInfo.map((roommate) => {
                return (
                    <Image src={roommate.profileImage} roundedCircle />
                );
            })
        }
    }

    console.log('AAAAAAAAAAAAAAAA')

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Img
                            variant="top"
                            src="https://cdngeneral.rentcafe.com/dmslivecafe/3/984399/Hearth-Model-Unit-IMG-0370_webopt_2MB.jpg?crop=(0,8,300,199.25000000000028)&cropxunits=300&cropyunits=200&quality=85&scale=both&"
                        />
                    </Col>
                    <Col>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="text-left">
                            {description}
                        </Card.Text>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6}>
                        <Card.Text className="text-left">
                            {location}
                        </Card.Text>
                    </Col>
                    <Col md={2}>
                        <Card.Text className="text-left">
                            ${price}
                        </Card.Text>
                    </Col>
                    <Col md={2}>
                        <Card.Text className="text-left">
                            {length} months
                        </Card.Text>
                    </Col>
                    <Col md={2}>
                        <Card.Text className="text-left">
                            {squareFootage} sqft
                        </Card.Text>
                    </Col>
                </Row>
                <Row>
                    {listRoomates()}
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Listing;
