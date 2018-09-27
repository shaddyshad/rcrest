import React, {Component} from 'react';
import {
    HelpBlock,
    ListGroupItem,
    ListGroup, Row, Col, Button, Panel,
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import LoginForm from '../../Common/LoginForm';
import RegisterForm from '../../Common/RegisterForm';
import PaymentPanel from "./PaymentPanel";

class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: true
        };
    }

    handleNewCustomer = (event) => {
        event.preventDefault();
        this.setState({activeForm: true})
    };

    handleReturnCustomer = (event) => {
        event.preventDefault();
        this.setState({activeForm: false});
    };

    render() {
        const {writer_id, discount_code, amount, onIdChange, onCodeChange, onRadioChange, isAuthenticated} = this.props;
        const Register =
            <div>
                <HelpBlock>Enter the form to create an account</HelpBlock>
                <RegisterForm/>
            </div>;

        const Login = (
            <div>
                <HelpBlock>Welcome Back, Sign in</HelpBlock>
                <LoginForm/>
            </div>
        );
        return (
            <div>
                <ListGroup>
                    {/*<ListGroupItem><Link to='/orders'>1. PAPER DETAILS</Link></ListGroupItem>*/}
                    {/*<ListGroupItem><Link to='/orders/1'> 2. PAPER INSTRUCTIONS</Link></ListGroupItem>*/}
                    {/*<ListGroupItem><Link to='/orders/2'>3. PRICE CALCULATIONS</Link></ListGroupItem>*/}
                    {/*<ListGroupItem><Link to='/orders/3'>4. ADDITIONAL FEATURES</Link></ListGroupItem>*/}
                    <ListGroupItem>
                        5. PAYMENT INFO
                        <HelpBlock>Amount: ${amount}</HelpBlock>
                        {isAuthenticated ?  <PaymentPanel/> : <Panel>
                            <Panel.Heading>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Button onClick={this.handleNewCustomer}>New Customer</Button>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Button onClick={this.handleReturnCustomer}>Returning Customer</Button>
                                    </Col>
                                </Row>
                            </Panel.Heading>
                            <Panel.Body>
                                {this.state.activeForm ? Register : Login}
                            </Panel.Body>
                        </Panel>}


                    </ListGroupItem>
                </ListGroup>

            </div>
        );
    }
}

export default Form1