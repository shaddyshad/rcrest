import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock
} from 'react-bootstrap';

class Form1 extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }



    render(){
        const {instructions, onFieldChange, onSubmit} = this.props;
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

                <Button type="submit" onClick={onSubmit}>Next</Button>

            </Form>
        );
    }
}

export default Form1