import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    Radio
} from 'react-bootstrap';

import {connect} from 'react-redux';
import {changeActiveForm} from '../../../actions/index';
import {WRITER_ID, DIGITAL_COPIES, DISCOUNT_CODE} from '../../../constants/fieldNames'
import {editAndSave} from "../../../actions/currentOrder/request";
import {init_save_order_request} from "../../../actions/currentOrder";
import {doneLoadingData, loadingData} from "../../../actions/async";
import SignIn from "../../shared/signIn";

const mapStateToProps = state => {
    return {
        order: state.currentOrder,
        authUser: state.authUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changePage: idx => dispatch(changeActiveForm(idx)),
        changeProps: (key, val) => dispatch(editAndSave(key, val)),
        //Initiate the save order protocol
        init_save_order_request: () => dispatch(init_save_order_request()),
        loading_data: () => dispatch(loadingData()),
        end_loading_data: () => dispatch(doneLoadingData())
    }
};

class Form4 extends Component {
    render() {
        const {order, changeProps, init_save_order_request} = this.props;
        return (
            <Form>
                <FormGroup>
                    <ControlLabel>Want a specific writer? </ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="WRITER ID"
                        value={order.writerId}
                        onChange={(event) => changeProps(WRITER_ID, event.target.value)}

                    />
                </FormGroup>
                <FormGroup onChange={(event) => changeProps(DIGITAL_COPIES, event.target.value === "YES")}>
                    <ControlLabel>Get digital copies of sources used? </ControlLabel>
                    <Radio name="radioGroup" value="YES" inline>
                        Yes
                    </Radio>{' '}
                    <Radio name="radioGroup" value="NO" inline>
                        No
                    </Radio>{' '}
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Discount Code </ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="DISCOUNT CODE"
                        value={order.discount_code}
                        onChange={(event) => changeProps(DISCOUNT_CODE, event.target.value)}

                    />
                </FormGroup>

                {this.props.authUser ? <Button onClick={init_save_order_request}>Checkout</Button> : <SignIn/>}

            </Form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form4);