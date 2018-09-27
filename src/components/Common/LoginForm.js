import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock,
    Panel
} from 'react-bootstrap';

import {Link, withRouter} from 'react-router-dom';
import {auth} from '../../firebase';
import * as routes from '../../Constants/routes';
import Spinner from "../Landing/Loader";

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    loaderShown: false
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };


    handleSubmit = (event) => {
        const {email, password} = this.state;

        const {history} = this.props;
        this.setState({loaderShown: true}, () => {
            setTimeout(() => {
                auth.doSignInWithEmailAndPassword(email, password)
                    .then((user) => {
                        this.setState({...INITIAL_STATE, loaderShown: false});
                        const {uid} = user.user;
                        let path = uid.substr(0, 10);
                        path = `/account/${path}`;
                        history.push(path);
                    })
                    .catch(error => {
                        this.setState({error, loaderShown: false});
                    });
            })
        })

        event.preventDefault();
    };

    render() {
        const {email, password, error, loaderShown} = this.state;

        const isInvalid =
            password === '' ||
            email === '';
        return (
            <div>
                {loaderShown ? <Spinner/> : <div>
                    <Panel style={styles.form}>
                        <Panel.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup
                                    controlId="basic-email"
                                >
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl
                                        type="email"
                                        value={email}
                                        placeholder="Your Email"
                                        onChange={this.handleEmailChange}
                                    />
                                </FormGroup>
                                <FormGroup
                                    controlId="formBasicText"
                                >
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl
                                        type="password"
                                        value={password}
                                        placeholder="Your Password"
                                        onChange={this.handlePasswordChange}
                                    />
                                </FormGroup>
                                <Button type="submit" disabled={isInvalid}>Login</Button>
                                <HelpBlock><Link to='/reset'>Forgot password?</Link></HelpBlock>
                            </Form>
                        </Panel.Body>
                        {error && <p>{error.message}</p>}
                    </Panel>
                    <HelpBlock style={styles.d}>Don't have an account? <Link to='/register'>Sign up.</Link></HelpBlock>
                </div>}

            </div>
        );
    }
}

const styles = {
    form: {
        backgroundColor: '#FFBA00',
        borderRadius: 20
    },
    c: {
        fontSize: 21
    },
    d: {
        color: 'rgb(214, 239, 255)',
        fontSize: 18
    }
}

export default withRouter(LoginForm);