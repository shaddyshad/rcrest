import React, {Component} from 'react';
import {
    HelpBlock,
    ListGroupItem,
    ListGroup, Row, Col, Button, Panel,
} from 'react-bootstrap';


import signIn from '../../shared/signIn';
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
        const {amount, isAuthenticated} = this.props;
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
                        {isAuthenticated ? <PaymentPanel/> :
                            <Panel>
                                <Panel.Body>
                                    <signIn/>
                                </Panel.Body>
                            </Panel>}
                    </ListGroupItem>
                </ListGroup>

            </div>
        );
    }
}

export default Form1