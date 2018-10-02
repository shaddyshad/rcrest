import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock
} from 'react-bootstrap';

import {connect} from 'react-redux';
import {
    changeActiveForm,
    changePaperInstructionsProperty
} from "../../../actions";

import {INSTRUCTIONS} from '../../../constants/fieldNames';


const mapStateToProps = state => {
    return {
        order: state.currentOrder.paperInstructions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changePage: idx => dispatch(changeActiveForm(idx)),
        changeProp: (key, value) => dispatch(changePaperInstructionsProperty(key, value))
    }
};

class Form2 extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }



    render(){
        const {order, changeProp, changePage} = this.props;
        const {instructions} = order;

        const isInvalid = instructions === '';
        return (
            <Form>
                <FormGroup controlId="basic-paper">
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Paper Instructions</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="Order Instructions"
                            value={instructions}
                            onChange={(event) => changeProp(INSTRUCTIONS, event.target.value)}

                        />
                    </FormGroup>

                    <HelpBlock>You will be able to upload files after order submission</HelpBlock>
                </FormGroup>

                {this.props.hideButton ? null :<Button disabled={isInvalid} onClick={() => changePage(2)}> Next</Button>}

            </Form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2);