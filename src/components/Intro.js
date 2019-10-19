import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

class Intro extends Component {
    render() {
        return (
            <Col className='home'>
                <div id="intro-msg">
                    <h1>hi there.</h1>
                    <h2>whatcha wanna eat today?</h2>
                </div>
            </Col>
        );
    }
}

export default Intro;