import React from 'react';
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';

const Navigation = ({username}) => {
    return (
        <Navbar staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <span>WELCOME {username}</span>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">PROFILE</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;