import React from 'react';
import './landingPage.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Common/NavBar'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';


function valuetext(value) {
    return `${value}`;
}

export default function LandingPage() {
    const [valueRoommate, setValueRoommate] = React.useState([0, 5]);
    const [valuePrice, setValuePrice] = React.useState([500, 2000]);

    const handleRoommateChange = (event, newValue) => {
        setValueRoommate(newValue);
    };

    const handlePriceChange = (event, newValue) => {
        setValuePrice(newValue);
    };

    return (
        <div>
            <NavBar />
            <Container className="landingImage" fluid>
                <Container>
                    <h1 className="landingWelcome">Choose Your Home!</h1>
                </Container>
                <Container className="landingSearch">
                    <Row>
                        <Col>
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
                        </Col>
                        <Col>
                            <Typography id="range-slider" gutterBottom>
                                Number of Roommates
                                </Typography>
                            <Box className="landingSlider">
                                <Slider
                                    value={valueRoommate}
                                    onChange={handleRoommateChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                    min={0}
                                    max={5}
                                />
                            </Box>
                        </Col>
                        <Col>
                            <Typography id="range-slider" gutterBottom>
                                Price
                                </Typography>
                            <Box className="landingSlider">
                                <Slider
                                    value={valuePrice}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                    min={500}
                                    max={2000}
                                    step={100}
                                />
                            </Box>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary">Search</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

