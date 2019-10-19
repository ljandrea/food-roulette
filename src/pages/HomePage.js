import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

import Intro from '../components/Intro';
import FoodForm from '../components/FoodForm';

import '../styles/home.css';

class HomePage extends Component {
    render() {
        return (
            <Row id="intro-row">
                <Intro />
                <FoodForm />
            </Row>
        );
    }
}

export default HomePage;