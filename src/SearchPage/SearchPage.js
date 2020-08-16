import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from './Filter';
import Listings from './Listings';
import NavBar from '../Common/NavBar';

function SearchPage() {
    return (
        <div>
            <NavBar />
            <Container className='mt-5'>
                <Row>
                    <Col md={4}>
                        <Filter />
                    </Col>
                    <Col md={8}>
                        <Listings />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchPage;
