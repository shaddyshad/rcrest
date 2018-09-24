import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock
} from 'react-bootstrap';

class LoginForm extends Component{

    state = {
        username: '',
        password: ''
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
                    <ControlLabel>Username</ControlLabel>
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
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={this.state.password}
                        placeholder="Your Password"
                        onChange={this.handlePasswordChange}
                    />
                </FormGroup>
                <Button type="submit">Login</Button>

                <HelpBlock>Or click <a onClick={this.createAccount}>here</a> to create an account</HelpBlock>
            </Form>
        );
    }
}

export default LoginForm