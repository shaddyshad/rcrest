import React from 'react';
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';

const Navigation = (props) => {
    return (
        <Navbar staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <span>Research crest</span>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">LEARN MORE</NavItem>
                <NavItem eventKey={1} href="#">FAQs</NavItem>
                <NavItem eventKey={1} href="#">HOW IT WORKS</NavItem>
                <NavItem eventKey={1} href="#">ABOUT</NavItem>
                <NavItem eventKey={1} href="#">ORDER</NavItem>
                <NavItem eventKey={1} href="#">LOGIN</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;