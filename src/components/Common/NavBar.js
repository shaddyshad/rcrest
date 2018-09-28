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
    setRootPath
} from "../../Actions";


const Navigation = ({setOrders, setRoot, changePath}) => {
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
                <NavItem eventKey={1}><Button onClick={() => setOrders('/order')} >ORDER</Button></NavItem>
                <NavItem eventKey={1}><Button onClick={() => changePath('/login')}>LOGIN</Button></NavItem>

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

export default connect(null, mapDispatchToProps)(Navigation);