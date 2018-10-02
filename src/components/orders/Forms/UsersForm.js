import React, {Component} from 'react';

import {
    Grid,
    Row,
    Col,
    Button
} from 'react-bootstrap';

import LoginForm from '../../shared/LoginForm';
import RegisterForm from '../../shared/RegisterForm'


class UsersForm extends Component{

    state = {};
    
    render(){
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <Button>New Customer</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Button>Returning Customer</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <LoginForm/>
                        <RegisterForm/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default UsersForm