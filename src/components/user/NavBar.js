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
import {signOut} from "../../actions/authUser";
import {connect} from "react-redux";


const Navigation = ({user, notifications, doSignOut}) => {
    return (
        <Navbar staticTop style={styles.nav}>
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
                    <NavDropdown eventKey="4" title={user ? `Hi ${user.email}` : 'Profile'} id="nav-dropdown">
                        <MenuItem eventKey="4.1">Profile</MenuItem>
                        <MenuItem eventKey="4.2">Settings</MenuItem>
                        <MenuItem eventKey="4.3" onClick={doSignOut}>Logout</MenuItem>
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        doSignOut: () => dispatch(signOut())
    }
};

const styles = {
    nav: {
        backgroundColor: "#dff4ff"
    }
}

export default connect(null, mapDispatchToProps)(Navigation);