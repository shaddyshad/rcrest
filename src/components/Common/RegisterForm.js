import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock
} from 'react-bootstrap';

class RegisterForm extends Component{

    state = {
        username: '',
        password: '',
        email: ''
    };

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    createAccount = (event) => {
        event.preventDefault();
        console.log(`Requesting to create an account`);
    };

    render(){
        return (
            <Form>
                <FormGroup
                    controlId="basic-username"
                >
                    { this.props.control ? <ControlLabel>Username</ControlLabel> : null}
                    <FormControl
                        type="text"
                        value={this.state.username}
                        placeholder="Your username"
                        onChange={this.handleUsernameChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="formBasicText"
                >
                    { this.props.control ? <ControlLabel>Username</ControlLabel> : null}
                    <FormControl
                        type="email"
                        value={this.state.email}
                        placeholder="Your Password"
                        onChange={this.handlePasswordChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="formBasicText"
                >
                    { this.props.control ? <ControlLabel>Username</ControlLabel> : null}
                    <FormControl
                        type="password"
                        value={this.state.password}
                        placeholder="Create a Password"
                        onChange={this.handlePasswordChange}
                    />
                </FormGroup>
                <Button type="submit">Create an Account</Button>

                { this.props.control ? <HelpBlock>By clicking "Create an Account" you agree to our <a href="//">terms of use</a> and out <a href="//">privacy policy</a> </HelpBlock> : ''}
            </Form>
        );
    }
}

export default RegisterForm