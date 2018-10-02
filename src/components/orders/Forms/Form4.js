import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock, Radio
} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeActiveForm, changeAdditionalFeaturesProperty, doSaveOrder} from '../../../actions';
import {WRITER_ID, DIGITAL_COPIES, DISCOUNT_CODE} from '../../../constants/fieldNames'

const mapStateToProps = state => {
    return {
        order: state.currentOrder.additionalFeatures,
        authUser: state.user.authUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changePage: idx => dispatch(changeActiveForm(idx)),
        changeProps: (key, val) => dispatch(changeAdditionalFeaturesProperty(key, val)),
        doSave: () => dispatch(doSaveOrder())
    }
};

class Form4 extends Component {
    constructor(props){
        super(props);
    }
    handleSubmit() {
        const {toSubmitOrder, changePage, authUser} = this.props;
        if(!authUser){
            //Anonymous save

            changePage(4)
        }

    }

    render() {
        const {order, changeProps, doSave} = this.props;
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

                {this.props.hideButton ? null : <Button onClick={() => doSave()}>Next</Button>}

            </Form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form4);