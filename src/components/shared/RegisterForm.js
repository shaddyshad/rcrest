import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock,
    Panel,
} from 'react-bootstrap';

import {auth} from "../../firebase";


import {withRouter} from 'react-router-dom';
import Spinner from "./Loader";
import {connect} from 'react-redux';
import {signUpUser} from '../../actions';

const mapStateToProps = state => {
    return {
        error: state.user.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        doRegister: (username, email, password) => dispatch(signUpUser(username, email, password))
    }
};


const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    password2: '',
    loaded: true,
    loaderShown: false
};

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE
    }


    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    handlePassword2Change = (event) => {
        this.setState({password2: event.target.value})
    };
    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handleSubmit = (event) => {
        const {username, email, password} = this.state;
        // this.setState({loaderShown: true}, () => {
        //     setTimeout(() => {
        //         auth.doCreateUserWithEmailAndPassword(email, password)
        //             .then(authUser => {
        //                 setTimeout(() => {
        //                     const {uid} = authUser.user;
        //                     //get the first few characters - 10
        //                     let path = uid.substr(0, 10);
        //                     path = `/account/${path}`;
        //                     this.setState({...INITIAL_STATE, loaderShown: false});
        //                     history.push(path);
        //                 }, 2000)
        //
        //             })
        //             .catch(error => {
        //                 this.setState({error, loaderShown: false});
        //             });
        //     }, 1000)
        // })
        this.props.doRegister(username, email, password);
        this.setState({...INITIAL_STATE});
        event.preventDefault();

    };

    render() {
        const {password, password2, email, username} = this.state;
        const {error} = this.props;
        const isInvalid =
            password !== password2 ||
            password2 === '' ||
            email === '' ||
            username === '';
        return (
            <div>
                {/*{loaderShown ? <Spinner/> :*/}
                    <Panel style={styles.form}>
                        <Panel.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    {this.props.control ? <ControlLabel>Username</ControlLabel> : null}
                                    <FormControl
                                        type="text"
                                        value={username}
                                        placeholder="Your username"
                                        onChange={this.handleUsernameChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    {this.props.control ? <ControlLabel>Email</ControlLabel> : null}
                                    <FormControl
                                        type="email"
                                        value={email}
                                        placeholder="Your Email"
                                        onChange={this.handleEmailChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    {this.props.control ? <ControlLabel>Password</ControlLabel> : null}
                                    <FormControl
                                        type="password"
                                        value={password}
                                        placeholder="Create a Password"
                                        onChange={this.handlePasswordChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    {this.props.control ? <ControlLabel>Confirm password</ControlLabel> : null}
                                    <FormControl
                                        type="password"
                                        value={password2}
                                        placeholder="Confirm your Password"
                                        onChange={this.handlePassword2Change}
                                    />
                                </FormGroup>
                                <Button type="submit" disabled={isInvalid}>Create an Account</Button>

                                {this.props.control ?
                                    <HelpBlock>By clicking "Create an Account" you agree to our <a href="//">terms of
                                        use</a> and
                                        out <a
                                            href="//">privacy policy</a> </HelpBlock> : ''}
                            </Form>
                        </Panel.Body>
                        {error && <p>{error.message}</p>}
                    </Panel>
                // }

            </div>
        );
    }
}

const styles = {
    form: {
        backgroundColor: '#FFBA00',
        borderRadius: 20
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));