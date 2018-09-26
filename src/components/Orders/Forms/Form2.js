import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

class Form1 extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }



    render(){
        const {instructions, onFieldChange, onSubmit} = this.props;

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
                            onChange={onFieldChange}

                        />
                    </FormGroup>

                    <HelpBlock>You will be able to upload files after order submission</HelpBlock>
                </FormGroup>

                <Link to="/orders/2"><Button>Next</Button></Link>

            </Form>
        );
    }
}

export default Form1