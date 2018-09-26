import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock,
    Panel,
    Grid,
    Row,
    Col
} from 'react-bootstrap';

import {auth} from '../../firebase';

const INITIAL_STATE = {
    email: '',
    error: null
};

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    onSubmit = (event) => {
        const { email } = this.state;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    }

    render() {
        const isInvalid = this.state.email === '';

        return (
            <div>
                <Grid>
                    <Row>
                        <Col xsHidden md={3}></Col>
                        <Col xsHidden md={5}>
                            <Panel>
                                <Panel.Body>
                                    <HelpBlock>Reset Password</HelpBlock>
                                    <Form onSubmit={this.onSubmit}>
                                        <FormGroup
                                            controlId="basic-email"
                                        >
                                            <ControlLabel>Email</ControlLabel>
                                            <FormControl
                                                type="email"
                                                value={this.state.email}
                                                placeholder="Your Email"
                                                onChange={this.handleEmailChange}
                                            />
                                        </FormGroup>
                                        <Button type="submit" disabled={isInvalid}>Reset</Button>
                                    </Form>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xsHidden md={3}></Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default LoginForm