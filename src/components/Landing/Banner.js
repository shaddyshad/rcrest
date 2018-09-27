import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {
    Route,
    Switch
} from 'react-router-dom';

//components
import BannerText from './BannerText';
import PriceCalculator from './PriceCalculator';
import LoginForm from '../Common/LoginForm';
import RegisterForm from '../Common/RegisterForm';

import {withRouter} from 'react-router-dom';

import Loader from 'react-loader-spinner';

/*
* routes
* / - pricecalculator
* /loging - Login Form
* /register - Register form
* */


class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lines: [
                "Research papers for sale.",
                "Quality research papers.",
                "Cheap research papers.",
                "Plagiarism free essays.",
            ],
            index: 0,
            current: '',
            typing: true,
            loaderShown: false
        };
    }


    done = () => {
        let {index, lines} = this.state;
        index += 1;
        if (index >= lines.length)
            index = 0;
        this.setState({typing: false, index}, () => {
            this.setState({typing: true})
        });
    };

    getLine() {
        const lines = [...this.state.lines];
        const {index} = this.state;
        return lines[index];
    }

    handleContinue = (event) => {
        //simulate a wait event
        const {history} = this.props;
        this.setState(
            {loaderShown: true}, () => {
                setTimeout(() => {
                    history.push('/orders');
                    this.setState({loaderShown: false})
                }, 1000);
            }
        );
        event.preventDefault();
    };


    render() {
        const {loaderShown} = this.state;
        const Register = <RegisterForm control={true}/>;
        const Calculator = <PriceCalculator onClick={this.handleContinue}/>;
        return (
            <div style={styles.banner}>
                {loaderShown ?
                    <Loader
                        type="TailSpin"
                        color='#FFBA00'
                        height={80}
                        width={80}
                    /> :
                    <Grid>
                        <Row className="show-grid">
                            {/*Banner content*/}
                            <Col xs={12} md={8}>
                                <h4 style={styles.head}>Relax We Write Your Research Papers and Essays!</h4>
                                {this.state.typing ?
                                    <BannerText text={this.getLine()} onTyping={this.done}/> : ''}
                            </Col>
                            {/*Login/ register form*/}
                            <Col xs={12} md={4}>
                                <Switch>
                                    <Route exact path='/' children={Calculator}/>
                                    <Route path='/login' component={LoginForm}/>
                                    <Route path='/register' children={Register}/>
                                </Switch>
                            </Col>
                        </Row>
                    </Grid>
                }

            </div>
        );
    }
}


const styles = {
    head: {
        fontSize: 43,
        font: '600 30px/1.25 Roboto Mono, monospace'
    },
    moving: {
        color: '#FED18C'
    },
    banner: {
        height: 400
    }
}

export default withRouter(Banner);