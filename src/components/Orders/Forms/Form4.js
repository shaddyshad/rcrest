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

class Form1 extends Component {

    render() {
        const {writer_id, discount_code, amount, onIdChange, onCodeChange, onRadioChange, onSubmit} = this.props;
        return (
            <Form>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Want a specific writer? </ControlLabel>
                    <FormControl
                        componentClass="text"
                        placeholder="WRITER ID"
                        value={writer_id}
                        onChange={onIdChange}

                    />
                </FormGroup>
                <FormGroup onChange={onRadioChange}>
                    <ControlLabel>Get digital copies of sources used? </ControlLabel>
                    <Radio name="radioGroup" value="YES" inline>
                        Yes
                    </Radio>{' '}
                    <Radio name="radioGroup" value="NO" inline>
                        No
                    </Radio>{' '}
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Discount Code </ControlLabel>
                    <FormControl
                        componentClass="text"
                        placeholder="DISCOUNT CODE"
                        value={discount_code}
                        onChange={onCodeChange}

                    />
                </FormGroup>

                <HelpBlock>Amount: {amount}</HelpBlock>

                <Button ><Link to='/orders/4'>Next</Link></Button>

            </Form>
        );
    }
}

export default Form1