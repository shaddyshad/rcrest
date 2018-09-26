import React, {Component} from 'react';
import {
    HelpBlock,
    ListGroupItem,
    ListGroup, Row, Col, Button, Grid
} from 'react-bootstrap';

import UsersForm from './UsersForm'

class Form1 extends Component {

    render() {
        const {writer_id, discount_code, amount, onIdChange, onCodeChange, onRadioChange, onSubmit} = this.props;
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>1. PAPER DETAILS</ListGroupItem>
                    <ListGroupItem>2. PAPER INSTRUCTIONS</ListGroupItem>
                    <ListGroupItem>3. PRICE CALCULATIONS</ListGroupItem>
                    <ListGroupItem>3. ADDITIONAL FEATURES</ListGroupItem>
                    <ListGroupItem>
                        3. PAYMENT INFO
                        <HelpBlock>Amount: ${amount}</HelpBlock>
                    </ListGroupItem>
                </ListGroup>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <Button>New Customer</Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <Button>Returning Customer</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Form1