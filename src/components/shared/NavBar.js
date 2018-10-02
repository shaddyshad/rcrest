import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'react-bootstrap';


import {connect} from 'react-redux';
import {
    changeActivePath,
    setOrdersPath,
    setRootPath,
} from "../../actions";

import {push} from 'connected-react-router';
import {HOME, SIGN_IN} from "../../constants/routes";

const Login = ({changePath}) => <NavItem eventKey={1} onClick={() => (changePath(SIGN_IN))}>LOGIN</NavItem>;
const Profile = ({changePath}) => <NavItem eventKey={1} onClick={() => (changePath(HOME))}>PROFILE</NavItem>;


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
                <NavItem eventKey={1}>ORDER</NavItem>
                {user?  <Profile changePath={changePath}/> : <Login changePath={changePath}/>}

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        setOrders: path => dispatch(setOrdersPath(path)),
        setRoot: path => dispatch(setRootPath(path)),
        changePath: path => dispatch(changeActivePath(path))
    }
};

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);