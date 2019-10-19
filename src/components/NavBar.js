import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {
    render() {
        return (
            // <div id='nav'>
            <Row id='nav-row'>
                <Col className='nav-col' id='nav-title'>
                    <h6>brandrea's food roulette</h6>
                </Col>
                <Col className='nav-col' id='nav-menu'>
                    {/* menu */}
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            // </div>
        );
    }
}

export default NavBar;