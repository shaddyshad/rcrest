import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'react-bootstrap';

import {connect} from "react-redux";

const Login = ({changePath}) => <NavItem eventKey={1} href="/signin">LOGIN</NavItem>;
const Profile = ({changePath}) => <NavItem eventKey={1} href="/home">GO TO PROFILE</NavItem>;



const Navigation = ({setOrders, setRoot, changePath, user}) => {
    return (
        <Navbar staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Button onClick={() => setRoot('/')}>Research crest</Button>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">LEARN MORE</NavItem>
                <NavItem eventKey={1} href="#">FAQs</NavItem>
                <NavItem eventKey={1} href="#">HOW IT WORKS</NavItem>
                <NavItem eventKey={1} href="#">ABOUT</NavItem>
                <NavItem eventKey={1} href="/post-order">ORDER</NavItem>
                {user?
                    <Profile changePath={changePath}/> : <Login changePath={changePath}/>}

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

const mapStateToProps = state => {
    return {
        user: state.authUser
    }
};


export default connect(mapStateToProps)(Navigation);