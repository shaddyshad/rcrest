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


const Navigation = ({username, notifications}) => {
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
                    <NavDropdown eventKey="4" title="Profile" id="nav-dropdown">
                        <MenuItem eventKey="4.1">Profile</MenuItem>
                        <MenuItem eventKey="4.2">Settins</MenuItem>
                        <MenuItem eventKey="4.3">Logout</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4.4">Terms and conditions</MenuItem>
                        <MenuItem eventKey="4.4">Money back policy</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={1} href="#">
                        {/*<OverlayTrigger placement="bottom" overlay={<Tooltip>Notifications</Tooltip>}>*/}
                        <span><FontAwesomeIcon icon='bullhorn'/>
                        <Label bsStyle="danger">{notifications}</Label>
                        </span>
                        {/*</OverlayTrigger>*/}
                    </NavItem>
                    <NavItem eventKey={1} href="#">
                        {/*<OverlayTrigger placement="bottom" overlay={<Tooltip>Help</Tooltip>}>*/}
                        <FontAwesomeIcon icon='question-circle'/>
                        {/*</OverlayTrigger>*/}
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;