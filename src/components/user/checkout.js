import React, {Component} from 'react';
import {
    Col, ControlLabel,
    FormGroup,
    Grid,
    HelpBlock, Label,
    ListGroup,
    ListGroupItem, Radio,
    Row
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {init_update_order_payment} from "../../actions/orders";

class Checkout extends Component{
    constructor(props){
        super(props);
        this.state = {
            cart: [],
            total: 13
        };
    }

    componentWillMount(){
        //Order ID
        const {match: {params: {id}}} = this.props;
        // const {uid} = this.props.user;
        const {orders} = this.props;
        if(!orders.hasOwnProperty(id))
            this.setState({information: "Order not found"});
        else{
            //We got the order
            const order = orders[id];
            //get amount
            this.setState({order, information: ""});
        }
    }

    onSuccess = payment => {
        console.log('Payment completed',payment.paid);
        //Payment done, update the order now, and move it to posted, save the transaction
        const {match: {params: {id}}} = this.props;
        this.props.init_update_order_payment(id, payment);
    };

    onCancel = data => {
        console.log(`Cancelled : ${data}`);
    };

    onError = error => {
        console.log(`Error: ${error}`);
    };


    render(){
        const {order, information} = this.state;

        let env = "sandbox";
        let currency = "USD";
        const total = order.information.amount > 0 ? order.information.amount : 13;

        const client = {
            sandbox: "AWOcrMGTklrpZwfzgBJN3cmp0gZFyr_j4kLfVqeH32W7nIhwRhfJJ63WWcIWS4__27Bf1LIhlVr7Gv5Y"
        };

        return (
            <div>
                <Grid>
                    <Row>

                        <Col xs={12} md={5}>
                            <FontAwesomeIcon icon={'credit-card'}/> <br/>
                            <ControlLabel>Payment </ControlLabel>
                            <FormGroup>
                                <Radio name="radioGroup" inline disabled>
                                    Debit
                                </Radio>{' '}
                                <Radio name="radioGroup" inline checked readOnly>
                                    Paypal
                                </Radio>{' '}
                            </FormGroup>

                           <PaypalExpressBtn
                               env={env}
                               client={client}
                               currency={currency}
                               total={total}
                               onError={this.onError}
                               onSuccess={this.onSuccess}
                               onCancel={this.onCancel}
                           />
                        </Col>
                        <Col xs={12} md={3}>
                            <HelpBlock>Your Cart   <Label>{order ? 1 : 0}</Label></HelpBlock>
                            <ListGroup>
                                <ListGroupItem>
                                    <HelpBlock>Product Name:   $ {total}</HelpBlock>
                                    <i>{order.request.discipline}</i>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <HelpBlock>Total: ${total}</HelpBlock>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authUser,
        orders: state.orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        init_update_order_payment: (orderID, transaction) => dispatch(init_update_order_payment(orderID, transaction))
    }
};

Checkout.propTypes = {
    user: PropTypes.object.isRequired,
    orders: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));