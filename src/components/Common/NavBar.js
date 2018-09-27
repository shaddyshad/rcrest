import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'react-bootstrap';

import {
    Link
} from 'react-router-dom';

const Navigation = ({onLogin, showLogin}) => {
    return (
        <Navbar staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to='/'>Research crest</Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">LEARN MORE</NavItem>
                <NavItem eventKey={1} href="#">FAQs</NavItem>
                <NavItem eventKey={1} href="#">HOW IT WORKS</NavItem>
                <NavItem eventKey={1} href="#">ABOUT</NavItem>
                <NavItem eventKey={1}><Link to='/orders'>ORDER</Link></NavItem>
                <NavItem eventKey={1}><Button onClick={onLogin}>LOGIN</Button></NavItem>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;