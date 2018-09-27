import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Label,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {auth} from "../../firebase";


const Navigation = ({username, notifications, doSignOut}) => {
    return (
        <Navbar staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <span>Research Crest</span>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        {/*<OverlayTrigger placement="bottom" overlay={<Tooltip>Notifications</Tooltip>}>*/}
                        <span><FontAwesomeIcon icon='bell'/>
                        <Label bsStyle="danger">{notifications}</Label>
                        </span>
                        {/*</OverlayTrigger>*/}
                    </NavItem>
                    <NavItem eventKey={1} href="#">
                        <span><FontAwesomeIcon icon='cart-plus'/> Place Order</span>
                    </NavItem>
                    <NavDropdown eventKey="4" title={`Hi ${username}`} id="nav-dropdown">
                        <MenuItem eventKey="4.1">Profile</MenuItem>
                        <MenuItem eventKey="4.2">Settins</MenuItem>
                        <MenuItem eventKey="4.3" onClick={auth.doSignOut}>Logout</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4.4">Terms and conditions</MenuItem>
                        <MenuItem eventKey="4.4">Money back policy</MenuItem>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;