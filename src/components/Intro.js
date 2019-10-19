import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

class Intro extends Component {
    render() {
        return (
            <Col className='home-comp' id='intro-div'>
                <div class='home-content'>
                    <h1>hi there.</h1>
                    <h2>so, you don't know what to eat today...</h2>
                </div>
            </Col >
        );
    }
}

export default Intro;