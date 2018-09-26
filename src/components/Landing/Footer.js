import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Navigation = (props) => {
    return (
        <footer>
            <Navbar>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">LEARN MORE</NavItem>
                        <NavItem eventKey={1} href="#">FAQs</NavItem>
                        <NavItem eventKey={1} href="#">HOW IT WORKS</NavItem>
                        <NavItem eventKey={1} href="#">ABOUT</NavItem>
                        <NavItem eventKey={1} href="#">ORDER</NavItem>
                        <NavItem eventKey={1} href="#">LOGIN</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Grid>
                <Row>
                    <Col key='fb' xs={12} md={3}>
                        <FontAwesomeIcon icon={['fab', 'facebook']}/>
                    </Col>
                    <Col key='ig' xs={12} md={3}>
                        <FontAwesomeIcon icon={['fab', 'instagram']}/>
                    </Col>
                    <Col key='tw' xs={12} md={3}>
                        <FontAwesomeIcon icon={['fab', 'twitter-square']}/>
                    </Col>
                    <Col key='gp' xs={12} md={3}>
                        <FontAwesomeIcon icon={['fab', 'google-plus-square']}/>
                    </Col>

                </Row>
            </Grid>
            <h4>Copyright © 2018 researchpapercrest.com. All rights reserved.</h4>

        </footer>
    )
};

export default Navigation;