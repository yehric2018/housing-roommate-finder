import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filters from './Filters';
import Listings from './Listings';
import NavBar from '../Common/NavBar';

function SearchPage() {
    const [allListings, setAllListings] = useState('');
    return (
        <div>
            <NavBar />
            <Container className='mt-5'>
                <Row>
                    <Col md={4}>
                        <Filters setAllListings={setAllListings} />
                    </Col>
                    <Col md={8}>
                        <Listings allListings={allListings} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchPage;
