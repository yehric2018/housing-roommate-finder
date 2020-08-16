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
import { Link } from 'react-router-dom'

class LandingPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            location: "Ballard",
            roommates: 2,
            price: 500
        }
        this.valuetext = this.valuetext.bind(this)
        this.handleLocChange = this.handleLocChange.bind(this)
        this.handleRoomChange = this.handleRoomChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
    }

    valuetext(value) {
        return `${value}`;
    }

    handleLocChange = e => {
        this.setState({location: e.target.value})
    }

    handleRoomChange = (e, val) => {
        this.setState({roommates: val})
    }

    handlePriceChange = (e, val) => {
        this.setState({price: val})
    }

    render() {
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
                                    <Form.Control as="select" onChange={this.handleLocChange}>
                                        <option>Ballard</option>
                                        <option>Capitol Hill</option>
                                        <option>Greenwood</option>
                                        <option>Northgate</option>
                                        <option>University District</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Typography id="discrete-slider" gutterBottom>
                                    Number of Roommates
                                </Typography>
                                <Slider
                                    defaultValue={2}
                                    getAriaValueText={this.valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks
                                    min={0}
                                    max={5}
                                    className="landingSlider"
                                    onChangeCommitted={this.handleRoomChange}
                                />
                            </Col>
                            <Col>
                                <Typography id="discrete-slider" gutterBottom>
                                    Price
                                </Typography>
                                <Slider
                                    defaultValue={500}
                                    getAriaValueText={this.valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={100}
                                    marks
                                    min={500}
                                    max={2000}
                                    className="landingSlider"
                                    onChangeCommitted={this.handlePriceChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to={{
                                    pathname:"/Search", 
                                    state: {location: this.state.location, roommates: this.state.roommates, price: this.state.price}
                                    }}>Search</Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default LandingPage