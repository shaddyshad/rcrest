import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Label
} from 'react-bootstrap';

const Navigation = ({notifications, onClickNotifications}) => {
    return (
        <Navbar staticTop>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1}>My Profile</NavItem>
                    <NavItem eventKey={1} onClick={onClickNotifications}>Notifications: <Label bsStyle="danger">{notifications}</Label></NavItem>
                    <NavItem eventKey={1}>Settings</NavItem>
                    <NavItem eventKey={1}>Logout</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;